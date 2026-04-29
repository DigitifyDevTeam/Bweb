import { ServicePageTemplate } from '@/components/sections/service/ServicePageTemplate'
import { SERVICE_PAGES } from '@/data/service-pages'

export function AutomationPage() {
  return <ServicePageTemplate data={SERVICE_PAGES.automatisation} />
}
