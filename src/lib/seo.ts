import { useEffect } from 'react'

interface SeoOptions {
  title: string
  description?: string
}

const DEFAULT_SUFFIX = 'BWEB — Agence d\'Intelligence Artificielle'

export function useSeo({ title, description }: SeoOptions): void {
  useEffect(() => {
    const fullTitle = title.includes('BWEB') ? title : `${title} · ${DEFAULT_SUFFIX}`
    document.title = fullTitle

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
}
