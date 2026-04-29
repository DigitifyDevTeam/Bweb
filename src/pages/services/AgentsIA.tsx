import { ServicePageTemplate } from '@/components/sections/service/ServicePageTemplate'
import { SERVICE_PAGES } from '@/data/service-pages'

export function AgentsIAPage() {
  return <ServicePageTemplate data={SERVICE_PAGES['agents-ia']} />
}
