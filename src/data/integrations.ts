export interface Integration {
  name: string
  short?: string
}

export const INTEGRATIONS: readonly Integration[] = [
  { name: 'ChatGPT' },
  { name: 'Claude' },
  { name: 'Gemini' },
  { name: 'n8n' },
  { name: 'Make' },
  { name: 'Zapier' },
  { name: 'Slack' },
  { name: 'Airtable' },
  { name: 'Notion' },
  { name: 'HubSpot' },
  { name: 'Apollo' },
  { name: 'GoHighLevel' },
  { name: 'Salesforce' },
  { name: 'WhatsApp' },
  { name: 'Stripe' },
] as const
