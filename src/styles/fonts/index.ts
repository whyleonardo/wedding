import { Cormorant_Garamond } from "next/font/google"
import localFont from "next/font/local"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

const calSans = localFont({
  src: "./cal-sans/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans"
})

export const fontCalSans = calSans.variable
export const fontSans = GeistSans.variable
export const fontMono = GeistMono.variable
export const fontCormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})
