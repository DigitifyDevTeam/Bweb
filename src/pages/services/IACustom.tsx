import { ServicePageTemplate } from '@/components/sections/service/ServicePageTemplate'
import { SERVICE_PAGES } from '@/data/service-pages'

export function IACustomPage() {
  return <ServicePageTemplate data={SERVICE_PAGES['ia-sur-mesure']} />
}
