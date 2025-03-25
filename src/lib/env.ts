import { createEnv } from "@t3-oss/env-nextjs"
import { vercel } from "@t3-oss/env-nextjs/presets"

import { z } from "zod"

export const env = createEnv({
  extends: [vercel()],
  client: {
    NEXT_PUBLIC_SITE_BASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_CLARITY_PROJECT_ID: z.string(),
    NEXT_PUBLIC_QR_CODE_PIX: z.string()
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL,
    NEXT_PUBLIC_CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
    NEXT_PUBLIC_QR_CODE_PIX: process.env.NEXT_PUBLIC_QR_CODE_PIX
  }
})
