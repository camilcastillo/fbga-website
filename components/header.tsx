"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              <Image
                src="/logo-federacion.png"
                alt="Logo Federación de Patinaje Gran Buenos Aires"
                width={80}
                height={80}
                priority
                className="rounded-lg shadow-md"
                sizes="80px"
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-primary">Federación Gran Buenos Aires</h1>
                <p className="text-sm text-muted-foreground font-medium">Patín Artístico</p>
              </div>
            </div>
          </div>

          <nav className="hidden lg:block" role="navigation" aria-label="Navegación principal">
            <div className="flex items-center space-x-8">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#institucional", label: "Institucional" },
                { href: "#indumentaria", label: "Indumentaria" },
                { href: "#capacitaciones", label: "Capacitaciones" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-primary transition-colors focus-visible:focus-visible"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-white focus-visible:focus-visible">
              Únete Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2 focus-visible:focus-visible"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#institucional", label: "Institucional" },
                { href: "#indumentaria", label: "Indumentaria" },
                { href: "#capacitaciones", label: "Capacitaciones" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md focus-visible:focus-visible"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white focus-visible:focus-visible">
                  Únete Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
