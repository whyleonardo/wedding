import { env } from "@/lib/env"

export const siteConfig = {
  name: "Next Boilerplate",
  url: env.NEXT_PUBLIC_SITE_BASE_URL,
  pixCode: env.NEXT_PUBLIC_QR_CODE_PIX
}

export type SiteConfig = typeof siteConfig
