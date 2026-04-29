import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { useSeo } from '@/lib/seo'

export function NotFound() {
  useSeo({ title: '404 — Page introuvable' })

  return (
    <section className="relative overflow-hidden py-32">
      <BackgroundGrid />
      <div className="container-page relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="font-display text-[120px] md:text-[180px] font-extrabold leading-none tracking-tighter">
            <GradientText>404</GradientText>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">Page introuvable</h1>
          <p className="text-[color:var(--color-muted)] leading-relaxed max-w-md">
            La page que vous cherchez n'existe pas ou a été déplacée. Mais nous avons
            plein d'autres choses passionnantes à vous montrer.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              as="router"
              to="/"
              size="lg"
              iconLeft={<Home className="size-4" />}
            >
              Retour à l'accueil
            </Button>
            <Button
              as="router"
              to="/contact"
              variant="ghost"
              size="lg"
              iconLeft={<ArrowLeft className="size-4" />}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
