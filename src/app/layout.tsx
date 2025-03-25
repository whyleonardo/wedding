import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { MicrosoftClarity } from "@/components/microsoft-clarity"
import { ScreenSizeIndicator } from "@/components/screen-size-indicator"

import { siteConfig } from "@/config/config"

import { cn } from "@/lib/utils"

import { fontCormorant, fontMono, fontSans } from "@/styles/fonts"
import "@/styles/styles.css"

import { QueryProvider } from "@/providers/query-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import { Analytics } from "@vercel/analytics/react"

import { Toaster } from "sonner"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  }
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen",
          fontSans,
          fontMono,
          fontCormorant.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            {children}
            <Toaster richColors />
            <Analytics />
            <MicrosoftClarity />
          </QueryProvider>
        </ThemeProvider>
        <ScreenSizeIndicator />
      </body>
    </html>
  )
}

export default RootLayout
