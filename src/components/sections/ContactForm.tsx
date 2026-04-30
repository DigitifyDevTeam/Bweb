import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const schema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  email: z.email('Email invalide'),
  phone: z.string().min(6, 'Téléphone invalide'),
  topic: z.string().min(1, 'Choisissez un sujet'),
  size: z.string().min(1, 'Choisissez une taille'),
  preference: z.enum(['call', 'email']),
  message: z.string().min(10, 'Min. 10 caractères').max(2000),
})

type FormValues = z.infer<typeof schema>
const CONTACT_API_ENDPOINT =
  import.meta.env.VITE_CONTACT_API_URL ?? '/src/api/send-email.php'

const TOPICS = [
  'Service client ou demandes répétitives',
  'Tâches administratives ou de bureau',
  'Gestion interne ou coordination d’équipe',
  'Entraînement et adoption de l’IA',
  'Agents vocaux',
  'Revue du budget',
  'Acquisition de clients',
  'CRM',
  'Je ne sais pas, je veux que vous me guidiez',
] as const

const SIZES = [
  'Travailleur indépendant',
  '1 à 10 employés',
  '11 à 50 employés',
  'Plus de 50',
] as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { preference: 'call' },
  })

  async function onSubmit(values: FormValues) {
    setSubmitError(null)

    try {
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(`Email webhook failed with status ${response.status}`)
      }

      const body = (await response.json()) as { success?: boolean; message?: string }
      if (!body.success) {
        throw new Error(body.message ?? 'Email endpoint returned an error')
      }

      setSubmitted(true)
      reset()
    } catch {
      setSubmitError(
        "Impossible d'envoyer votre message pour le moment. Réessayez dans quelques instants.",
      )
    }
  }

  if (submitted) {
    return (
      <div className="glass ring-gradient flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-gradient-brand">
          <CheckCircle2 className="size-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold">Merci pour votre message !</h3>
        <p className="text-[color:var(--color-muted)]">
          Un de nos spécialistes vous recontacte sous 24 heures.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="ghost">
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-3xl p-6 md:p-10 flex flex-col gap-7 md:gap-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <Field label="Prénom" error={errors.firstName?.message}>
          <input
            {...register('firstName')}
            className={inputClass(!!errors.firstName)}
            placeholder="Jean"
          />
        </Field>
        <Field label="Nom" error={errors.lastName?.message}>
          <input
            {...register('lastName')}
            className={inputClass(!!errors.lastName)}
            placeholder="Dupont"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <Field label="Téléphone" error={errors.phone?.message}>
          <input
            {...register('phone')}
            className={inputClass(!!errors.phone)}
            placeholder="+33 6 ..."
            type="tel"
          />
        </Field>
        <Field label="Email professionnel" error={errors.email?.message}>
          <input
            {...register('email')}
            className={inputClass(!!errors.email)}
            placeholder="vous@entreprise.fr"
            type="email"
          />
        </Field>
      </div>

      <Field
        label="Qu’aimeriez-vous améliorer ou gagner du temps dans votre vie quotidienne ?"
        error={errors.topic?.message}
      >
        <select {...register('topic')} className={inputClass(!!errors.topic)} defaultValue="">
          <option value="" disabled>
            Sélectionnez un sujet
          </option>
          {TOPICS.map((t) => (
            <option key={t} value={t} className="bg-[color:var(--color-bg)]">
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Taille de votre entreprise" error={errors.size?.message}>
        <div className="flex flex-wrap gap-3">
          {SIZES.map((s) => (
            <label
              key={s}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 has-[:checked]:border-transparent has-[:checked]:bg-gradient-brand has-[:checked]:text-white"
            >
              <input type="radio" value={s} {...register('size')} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Vous souhaitez un cabinet de conseil gratuit pour explorer des idées d’IA ?">
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'call', label: 'Oui, je veux une consultation personnalisée' },
            { value: 'email', label: 'Je préfère recevoir des informations par email' },
          ].map((opt) => (
            <label
              key={opt.value}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 has-[:checked]:border-transparent has-[:checked]:bg-gradient-brand has-[:checked]:text-white"
            >
              <input
                type="radio"
                value={opt.value}
                {...register('preference')}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </Field>

      <Field
        label="Parlez-nous de votre dossier ou de ce que vous souhaitez accomplir *"
        error={errors.message?.message}
        hint="Par exemple : je veux améliorer ma façon de gérer mon entreprise, réduire les tâches manuelles, ou simplement comprendre comment l’intelligence artificielle peut m’aider. Une entreprise libre."
      >
        <textarea
          {...register('message')}
          rows={5}
          className={cn(inputClass(!!errors.message), 'resize-none py-3 leading-relaxed')}
          placeholder="Message libre..."
        />
      </Field>

      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:pt-1">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-[color:var(--color-muted)]">
            Réponse garantie sous 24h ouvrées.
          </p>
          {submitError ? (
            <p className="text-xs text-rose-400">{submitError}</p>
          ) : null}
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          iconRight={<Send className="size-4" />}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </div>
    </form>
  )
}

interface FieldProps {
  label: string
  error?: string
  hint?: string
  children: React.ReactNode
}

function Field({ label, error, hint, children }: Readonly<FieldProps>) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="text-sm font-medium text-[color:var(--color-text)]">
        {label}
      </span>
      {children}
      {hint && !error ? (
        <span className="text-xs text-[color:var(--color-subtle)]">{hint}</span>
      ) : null}
      {error ? (
        <span className="text-xs text-rose-400">{error}</span>
      ) : null}
    </label>
  )
}

function inputClass(hasError: boolean): string {
  return cn(
    'h-12 w-full rounded-xl border bg-white/[0.04] px-4 text-sm text-white placeholder:text-[color:var(--color-subtle)] focus:outline-none focus:ring-2',
    hasError
      ? 'border-rose-500/60 focus:ring-rose-500/30'
      : 'border-white/10 focus:border-white/30 focus:ring-[color:var(--color-brand-500)]/30',
  )
}
