/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const ServicesPage = lazy(() =>
  import('@/pages/Services').then((m) => ({ default: m.ServicesPage })),
)
const AgentsIAPage = lazy(() =>
  import('@/pages/services/AgentsIA').then((m) => ({ default: m.AgentsIAPage })),
)
const AutomationPage = lazy(() =>
  import('@/pages/services/Automation').then((m) => ({ default: m.AutomationPage })),
)
const IACustomPage = lazy(() =>
  import('@/pages/services/IACustom').then((m) => ({ default: m.IACustomPage })),
)
const PricingPage = lazy(() =>
  import('@/pages/Pricing').then((m) => ({ default: m.PricingPage })),
)
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() =>
  import('@/pages/Contact').then((m) => ({ default: m.Contact })),
)
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })))
const BlogPostPage = lazy(() =>
  import('@/pages/BlogPost').then((m) => ({ default: m.BlogPostPage })),
)
const Faq = lazy(() => import('@/pages/Faq').then((m) => ({ default: m.Faq })))
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFound })),
)

function PageFallback() {
  return (
    <div className="container-page py-32 flex items-center justify-center">
      <div className="size-10 rounded-full border-2 border-white/10 border-t-[color:var(--color-brand-500)] animate-spin" />
    </div>
  )
}

function withSuspense(node: React.ReactNode) {
  return <Suspense fallback={<PageFallback />}>{node}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: 'services', element: withSuspense(<ServicesPage />) },
      { path: 'services/agents-ia', element: withSuspense(<AgentsIAPage />) },
      { path: 'services/automatisation', element: withSuspense(<AutomationPage />) },
      { path: 'services/ia-sur-mesure', element: withSuspense(<IACustomPage />) },
      { path: 'tarifs', element: withSuspense(<PricingPage />) },
      { path: 'a-propos', element: withSuspense(<About />) },
      { path: 'contact', element: withSuspense(<Contact />) },
      { path: 'blog', element: withSuspense(<Blog />) },
      { path: 'blog/:slug', element: withSuspense(<BlogPostPage />) },
      { path: 'faq', element: withSuspense(<Faq />) },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
])
