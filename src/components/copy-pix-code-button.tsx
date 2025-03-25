"use client"

import { Button } from "@/components/ui/button"

import { siteConfig } from "@/config/config"

import { toast } from "sonner"

export const CopyPixCodeButton = () => {
  return (
    <Button
      size="lg"
      onClick={async () => {
        await navigator.clipboard
          .writeText(siteConfig.pixCode)
          .then(() => {
            toast.success("Código pix copiado ♥")
          })
          .catch((err) => {
            console.error("Erro ao copiar: ", err)
          })
      }}
      className="bg-brand hover:bg-brand/80 text-lg text-white transition-all duration-300"
    >
      Copiar código PIX
    </Button>
  )
}
