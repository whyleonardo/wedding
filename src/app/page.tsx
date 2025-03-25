import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next/types"

import { links } from "@/config/links"

import { cn } from "@/lib/utils"

import { CalendarCheckIcon, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Laís e Leonardo | Lista de Presentes"
}

const HomePage = () => {
  return (
    <div className="bg-brand-background font-cormorant relative min-h-screen overflow-hidden tracking-tight">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 size-64 -translate-x-1/3 -translate-y-1/3">
        <div className="bg-brand-secondary h-full w-full rounded-full opacity-20" />
      </div>
      <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3">
        <div className="bg-brand-secondary h-full w-full rounded-full opacity-20" />
      </div>

      {/* Botanical Corner Decorations */}
      <div className="absolute top-0 left-0 h-48 w-48">
        <svg
          viewBox="0 0 100 100"
          className="fill-brand-secondary h-full w-full opacity-30"
        >
          <path d="M0,0 Q50,50 100,0 Q50,-50 0,0" />
          <circle cx="85" cy="15" r="3" />
          <circle cx="75" cy="25" r="3" />
          <circle cx="65" cy="15" r="3" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 h-48 w-48 rotate-180">
        <svg
          viewBox="0 0 100 100"
          className="fill-brand-secondary h-full w-full opacity-30"
        >
          <path d="M0,0 Q50,50 100,0 Q50,-50 0,0" />
          <circle cx="85" cy="15" r="3" />
          <circle cx="75" cy="25" r="3" />
          <circle cx="65" cy="15" r="3" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto max-w-2xl px-4 py-16">
        <header className="text-center">
          <Image
            src="/photo.webp"
            width={250}
            height={250}
            alt="Foto"
            className="mx-auto mb-4 size-36 rounded-full object-cover"
          />

          <h1 className="text-brand text-4xl md:text-5xl">
            Lista de Presentes
          </h1>
          <p className="text-brand-secondary mt-2 text-xl font-normal">
            Agradecemos a sua contribuição ♥
          </p>
        </header>
        <div className="my-6 space-y-4">
          {/* Amazon Wishlist */}

          {links.map((link) => {
            const Icon = link.icon

            return (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="bg-opacity-50 group block rounded-xl bg-white p-4 shadow-sm backdrop-blur-sm transition-all duration-500 select-none hover:translate-y-[-2px] hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-opacity-10 bg-brand flex size-12 items-center justify-center rounded-full p-1.5">
                    <Icon
                      className={cn(
                        "size-full fill-white"
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-brand text-2xl font-medium">
                      {link.name}
                    </h2>
                    <p className="text-brand-secondary text-sm">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="text-brand-secondary h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            )
          })}
        </div>

        <p className="text-brand-secondary mt-2 text-center text-xl font-normal">
          Ainda não confirmou sua presença?
        </p>

        <Link
          href="https://sites.icasei.com.br/laisechristian/pages/32050268"
          target="_blank"
          className="bg-opacity-50 group mt-4 block rounded-xl bg-white p-4 shadow-sm backdrop-blur-sm transition-all duration-500 select-none hover:translate-y-[-2px] hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="bg-opacity-10 bg-brand flex size-12 items-center justify-center rounded-full p-1.5">
              <CalendarCheckIcon className="text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-brand text-2xl font-medium md:text-2xl">
                Confirme aqui
              </h2>
            </div>
            <ExternalLink className="text-brand-secondary h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
