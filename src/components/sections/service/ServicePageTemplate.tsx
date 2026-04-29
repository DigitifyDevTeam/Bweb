import { useSeo } from '@/lib/seo'
import type { ServicePageData } from '@/data/service-pages'
import { ServiceHero } from '@/components/sections/service/ServiceHero'
import { Problem } from '@/components/sections/service/Problem'
import { Pillars } from '@/components/sections/service/Pillars'
import { UseCases } from '@/components/sections/service/UseCases'
import { StackTabs } from '@/components/sections/service/StackTabs'
import { WhyInvest } from '@/components/sections/service/WhyInvest'
import { Method } from '@/components/sections/service/Method'
import { CTAFinal } from '@/components/sections/service/CTAFinal'

interface ServicePageTemplateProps {
  data: ServicePageData
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  useSeo({ title: data.seo.title, description: data.seo.description })

  return (
    <>
      <ServiceHero data={data.hero} />
      <Problem data={data.problem} />
      <Pillars data={data.pillars} />
      <UseCases data={data.useCases} />
      <StackTabs data={data.stack} />
      <WhyInvest data={data.reasons} />
      <Method data={data.method} />
      <CTAFinal data={data.cta} />
    </>
  )
}
