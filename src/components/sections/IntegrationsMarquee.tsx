import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientText } from '@/components/ui/GradientText'
import {
  SiAirtable,
  SiAnthropic,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGooglegemini,
  SiHubspot,
  SiMake,
  SiMongodb,
  SiNextdotjs,
  SiNotion,
  SiN8N,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiPostgresql,
  SiReact,
  SiSalesforce,
  SiSlack,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
  SiZapier,
} from 'react-icons/si'
import { LuBlocks, LuMousePointer2 } from 'react-icons/lu'
import type { IconType } from 'react-icons'

const ICONS_BY_NAME: Record<string, IconType> = {
  ChatGPT: SiOpenai,
  OpenAI: SiOpenai,
  Claude: SiAnthropic,
  Cursor: LuMousePointer2,
  RAG: LuBlocks,
  Gemini: SiGooglegemini,
  n8n: SiN8N,
  Make: SiMake,
  Zapier: SiZapier,
  Slack: SiSlack,
  Airtable: SiAirtable,
  Notion: SiNotion,
  HubSpot: SiHubspot,
  Apollo: LuBlocks,
  GoHighLevel: LuBlocks,
  Salesforce: SiSalesforce,
  WhatsApp: SiWhatsapp,
  Stripe: SiStripe,
  TypeScript: SiTypescript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  Django: SiDjango,
  Docker: SiDocker,
  GitHub: SiGithub,
  Vercel: SiVercel,
  'Next.js': SiNextdotjs,
  Tailwind: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
}

const ICON_COLORS_BY_NAME: Record<string, string> = {
  ChatGPT: '#10A37F',
  OpenAI: '#10A37F',
  Claude: '#D97757',
  Cursor: '#FFFFFF',
  RAG: '#22D3EE',
  Gemini: '#8E75FF',
  n8n: '#EA4B71',
  Make: '#6366F1',
  Zapier: '#FF4F00',
  Slack: '#E01E5A',
  Airtable: '#18BFFF',
  Notion: '#FFFFFF',
  HubSpot: '#FF7A59',
  Apollo: '#7C3AED',
  GoHighLevel: '#22C55E',
  Salesforce: '#00A1E0',
  WhatsApp: '#25D366',
  Stripe: '#635BFF',
  TypeScript: '#3178C6',
  React: '#61DAFB',
  'Node.js': '#5FA04E',
  Python: '#3776AB',
  Django: '#44B78B',
  Docker: '#2496ED',
  GitHub: '#FFFFFF',
  Vercel: '#FFFFFF',
  'Next.js': '#FFFFFF',
  Tailwind: '#06B6D4',
  PostgreSQL: '#4169E1',
  Supabase: '#3ECF8E',
  MongoDB: '#47A248',
}

const AI_STACK = [
  'Claude',
  'Cursor',
  'OpenAI',
  'RAG',
  'Gemini',
  'n8n',
  'Make',
  'Zapier',
  'Airtable',
  'Notion',
  'HubSpot',
  'Salesforce',
  'WhatsApp',
  'Stripe',
] as const

const DEV_STACK = [
  'TypeScript',
  'Python',
  'Django',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Docker',
  'GitHub',
  'Vercel',
  'PostgreSQL',
  'Supabase',
  'MongoDB',
  'Slack',
] as const

function IntegrationIcon({ name }: Readonly<{ name: string }>) {
  const Icon = ICONS_BY_NAME[name] ?? LuBlocks
  const color = ICON_COLORS_BY_NAME[name] ?? '#A5B4FC'
  return (
    <span
      className="inline-flex size-14 items-center justify-center"
      style={{ color }}
      aria-label={name}
      title={name}
    >
      <Icon className="size-11" aria-hidden />
    </span>
  )
}

export function IntegrationsMarquee() {
  const aiDoubled = [...AI_STACK, ...AI_STACK]
  const devDoubled = [...DEV_STACK, ...DEV_STACK]
  return (
    <section className="relative py-12">
      <div className="container-page flex flex-col items-center gap-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nos intégrations"
            title={
              <>
                Une stack IA <GradientText>connectée à votre écosystème</GradientText>
              </>
            }
            description="Nous intégrons les meilleurs outils IA, automation et développement pour déployer des systèmes fiables, évolutifs et alignés avec vos opérations."
          />
        </ScrollReveal>

        <div className="relative w-full overflow-hidden mask-fade-x">
          <div
            className="flex w-max items-center gap-3"
            style={{ animation: 'var(--animate-marquee)' }}
          >
            {aiDoubled.map((integration, idx) => (
              <div
                key={`${integration}-${idx}`}
                className="glass flex shrink-0 items-center justify-center rounded-2xl px-8 py-5"
              >
                <IntegrationIcon name={integration} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden mask-fade-x">
          <div
            className="flex w-max items-center gap-3"
            style={{ animation: 'var(--animate-marquee-rev)' }}
          >
            {devDoubled.map((integration, idx) => (
              <div
                key={`r-${integration}-${idx}`}
                className="glass flex shrink-0 items-center justify-center rounded-2xl px-8 py-5"
              >
                <IntegrationIcon name={integration} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
