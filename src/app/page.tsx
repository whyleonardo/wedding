import Link from "next/link"

import { links } from "@/config/links"

import { cn } from "@/lib/utils"

import { ExternalLink } from "lucide-react"

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
        <header className="mb-12 text-center">
          <h1 className="text-brand mb-2 text-4xl md:text-5xl">
            Nossa Lista de Presentes
          </h1>
          <p className="text-brand-secondary text-xl font-normal">
            Obrigado por pensar em nós.
          </p>
        </header>

        <div className="space-y-4">
          {/* Amazon Wishlist */}

          {links.map((link) => {
            const Icon = link.icon

            return (
              <Link
                key={link.href}
                href={link.href}
                className="bg-opacity-50 group block rounded-xl bg-white p-4 shadow-sm backdrop-blur-sm transition-all select-none hover:translate-y-[-2px] hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-opacity-10 bg-brand flex size-14 items-center justify-center rounded-full p-1.5">
                    <Icon
                      className={cn(
                        "size-full fill-white",
                        link.name === "Amazon" && "size-8"
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
      </div>
    </div>
  )
}

export default HomePage
