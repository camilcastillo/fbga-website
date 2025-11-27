"use client"


import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EMAIL } from "@/constants/email.constant"
import Image from "next/image"
import { useState } from "react"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Federación de Patinaje Gran Buenos Aires",
  description: "Federación oficial de patinaje artístico de Gran Buenos Aires con más de 100 clubes afiliados",
  url: "https://federacionpatinajegba.com",
  logo: "https://federacionpatinajegba.com/logo-federacion.png",
  sameAs: ["https://www.facebook.com/federacionpatinajegba", "https://www.instagram.com/federacionpatinajegba"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Buenos Aires",
  },
  sport: "Patinaje Artístico",
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow  top-0 z-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between min-h-20">
              {/* Logo - Compact size matching reference */}
                            <div className="h-32 flex items-center justify-center">

                              <Image src={'/images/companies/logo.png'} width={200} height={200} alt="logo" />
                            </div>
              {/* Desktop Navigation - Right aligned */}
              <nav className="hidden md:flex items-center gap-10">
                <a
                  href="#inicio"
                  className="text-[#003D7A] hover:text-[#00A9E0] transition-colors font-semibold text-base"
                >
                  Inicio
                </a>
                <a
                  href="#institucion"
                  className="text-[#003D7A] hover:text-[#00A9E0] transition-colors font-semibold text-base"
                >
                  Institución
                </a>
                <a
                  href="#novedades"
                  className="text-[#003D7A] hover:text-[#00A9E0] transition-colors font-semibold text-base"
                >
                  Novedades
                </a>
                <a
                  href="#contacto"
                  className="text-[#003D7A] hover:text-[#00A9E0] transition-colors font-semibold text-base"
                >
                  Contacto
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-3" aria-label="Menú">
                  <span className="w-6 h-0.5 bg-[#003D7A] rounded-full"></span>
                  <span className="w-6 h-0.5 bg-[#003D7A] rounded-full"></span>
                  <span className="w-6 h-0.5 bg-[#003D7A] rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <nav className="md:hidden pb-4 border-t border-gray-200 mt-2">
                <a
                  href="#inicio"
                  className="block px-4 py-3 text-[#003D7A] hover:bg-gray-50 font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#institucion"
                  className="block px-4 py-3 text-[#003D7A] hover:bg-gray-50 font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Institución
                </a>
                <a
                  href="#novedades"
                  className="block px-4 py-3 text-[#003D7A] hover:bg-gray-50 font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Novedades
                </a>
                <a
                  href="#contacto"
                  className="block px-4 py-3 text-[#003D7A] hover:bg-gray-50 font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </nav>
            )}
          </div>
        </header>

        <main>
          <section
            id="inicio"
            className="relative min-h-[650px] flex items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(90deg, #B8D432 0%, #F9B233 15%, #F15A29 30%, #E94190 50%, #9B59B6 70%, #00A9E0 100%)",
            }}
          >
            <div className="container mx-auto px-6 py-24 text-center relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
                FEDERACIÓN DE PATINAJE
                <br />
                GRAN BUENOS AIRES
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-12 font-normal tracking-wide drop-shadow-md">
                Pasión, Disciplina y Excelencia sobre Ruedas
              </p>

              {/* Chevron down arrow */}
              <div className="mb-8">
                <svg
                  className="w-12 h-12 mx-auto text-white opacity-80 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <Button
                size="lg"
                className="cursor-pointer bg-white text-[#003D7A] hover:bg-gray-100 text-base px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all h-auto"
                onClick={() => document.getElementById("institucion")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conocé Nuestra Institución
              </Button>
            </div>
          </section>

          {/* Sección Deportes */}
          <section id="deportes" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 federation-blue">Nuestros Deportes</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Patinaje Artístico */}
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-80">
                    <Image
                      src="/images/design-mode/WhatsApp%20Image%202025-10-20%20at%2011.10.46%20%281%29.jpeg"
                      alt="Patinaje Artístico"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4 federation-blue">Patinaje Artístico</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      El patinaje artístico combina técnica, expresión y creatividad. Nuestros atletas compiten en
                      diversas categorías desde nivel C hasta internacional, demostrando excelencia en cada
                      presentación.
                    </p>
                  </CardContent>
                </Card>

                {/* Patinaje de Velocidad */}
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-80">
                    <Image
                      src="/images/design-mode/velocidad.jpg"
                      alt="Patinaje de Velocidad"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4 federation-red">Patinaje de Velocidad</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      La velocidad y la resistencia son fundamentales en esta disciplina. Nuestros patinadores compiten
                      en pistas y circuitos, alcanzando velocidades impresionantes con técnica y determinación.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección Novedades */}
          <section id="novedades" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 federation-blue">Novedades</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src="/images/design-mode/delfinamundial(1).jpg"
                      alt="Delfina Veljanovich en Beijing"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">Fecha: 2024</p>
                    <h4 className="font-bold text-xl mb-3 federation-blue">
                      Orgullo Internacional - Delfina en Beijing
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nuestra atleta Delfina Veljanovich nos representó de manera increíble en el Beijing Artistic World
                      Championships, logrando el 7° puesto del mundo. Un resultado que refleja dedicación, esfuerzo y
                      pasión por este deporte. Detrás de este logro hay un proceso exigente, constante y lleno de
                      aprendizaje. Felicitaciones Delfina y a todo su equipo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src="/images/design-mode/IMG-20251013-WA0095.jpg"
                      alt="Campeones Copa Roberto Rodríguez"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">Fecha: 13/10/2024</p>
                    <h4 className="font-bold text-xl mb-3 federation-blue">Campeones en la Copa Roberto Rodríguez🏆</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Más de 200 patinadoras representaron con orgullo a nuestra Federación en la Copa Nacional Roberto
                      Rodríguez, que se desarrolló en la Provincia de San Luis. Gracias a su esfuerzo, compromiso y
                      pasión logramos subir a lo más alto del podio🇦🇷
                    </p>
                  </CardContent>
                </Card>

                {/* Noticia 3 */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src="/images/design-mode/IMG-20251013-WA0097.jpg"
                      alt="Presidente en Copa Adaptados"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">Fecha: 13/10/2024</p>
                    <h4 className="font-bold text-xl mb-3 federation-blue">Copa de Campeones en Adaptados 2025</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Nuestro presidente Luciano Fernández se hizo presente en la Copa Nacional Roberto Rodríguez,
                      acompañando a nuestra delegación y participando de la Ceremonia Oficial junto a representantes de
                      todo el país. Con enorme orgullo recibimos la Copa de Campeones en Copa Adaptados 2025, fruto del
                      esfuerzo, la dedicación y el talento de nuestros atletas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección Institución */}
          <section id="institucion" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 federation-blue">Institución</h2>
              <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
                Conoce a las autoridades que lideran nuestra federación con compromiso y dedicación
              </p>

              <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-8 federation-blue text-center">Autoridades</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">LF</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-blue">Luciano Fernandez</h4>
                      <p className="text-gray-600 font-medium">Presidente</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">SR</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-green">Susana Ruz</h4>
                      <p className="text-gray-600 font-medium">Vicepresidente</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-celeste rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">EM</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-celeste">Emiliano Mendoz</h4>
                      <p className="text-gray-600 font-medium">Secretario</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">GP</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-red">Graciela Pugliese</h4>
                      <p className="text-gray-600 font-medium">Tesorería</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-gray-700 font-bold">MZ</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-blue">Matias Zabala</h4>
                      <p className="text-gray-600 font-medium">Primer Vocal</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">CV</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-blue">Claudia Vaca</h4>
                      <p className="text-gray-600 font-medium">Segundo Vocal</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">CM</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-green">Carina Maiorano</h4>
                      <p className="text-gray-600 font-medium">Primer Vocal Suplente</p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-3xl font-bold mb-8 federation-blue text-center">Colegio de Jueces y Árbitros</h3>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-celeste rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">SR</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-celeste">Susana Ruz</h4>
                      <p className="text-gray-600 font-medium">Presidente</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-federation-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl text-white font-bold">RR</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 federation-red">Romina Rodriguez</h4>
                      <p className="text-gray-600 font-medium">Coordinadora</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Sección Valores */}
          <section id="valores" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 federation-blue">
                Valores de la Federación
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">
                En nuestra Federación creemos que el patinaje artístico es mucho más que un deporte: es un espacio de
                encuentro, aprendizaje y crecimiento. Por eso, nuestros valores son:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-blue text-center">Respeto</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Hacia cada atleta, entrenador, juez y familia, reconociendo el esfuerzo y la trayectoria de todos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🌟</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-green text-center">Unidad</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Nos identificamos como una gran familia que se apoya, acompaña y celebra cada logro, individual y
                      colectivo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💪</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-red text-center">Compromiso</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Trabajamos con responsabilidad, dedicación y pasión por el desarrollo del patinaje artístico.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-celeste rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤲</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-celeste text-center">Solidaridad</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Fomentamos el compañerismo, la ayuda mutua y el trabajo en equipo como base de nuestra identidad.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-red text-center">Excelencia</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Buscamos la mejora constante, priorizando el crecimiento humano junto al deportivo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-federation-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🌈</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 federation-green text-center">Inclusión</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Garantizamos un espacio abierto y accesible, donde cada persona tiene la oportunidad de crecer y
                      brillar.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección Objetivos */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 federation-blue">
                Objetivos de la Federación
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">
                Nuestra misión es acompañar y potenciar el talento de cada atleta, brindando un entorno seguro,
                motivador y profesional. Para ello, nos proponemos:
              </p>

              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Acompañar a cada deportista en su camino, cuidando tanto su formación deportiva como su
                          bienestar integral.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-green rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Impulsar el desarrollo del patinaje artístico en todas sus modalidades y niveles.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-celeste rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Ofrecer instancias de capacitación y actualización para entrenadores, jueces y dirigentes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-red rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Fortalecer el espíritu federativo a través del trabajo conjunto, la participación y el sentido
                          de pertenencia.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-yellow rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-700 font-bold text-xl">5</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Representar con orgullo a nuestros atletas en competencias locales, nacionales e
                          internacionales.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-federation-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">6</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Mantener una gestión transparente, responsable y cercana a la comunidad.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Sección Reglamentos */}
          <section id="reglamentos" className="py-16 bg-gray-50 hidden">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 federation-blue">Reglamentos</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 federation-blue">Patinaje Artístico</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-blue">•</span>
                        <span>Categoría C - Iniciación</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-blue">•</span>
                        <span>Categoría B - Intermedio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-blue">•</span>
                        <span>Categoría A - Avanzado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-blue">•</span>
                        <span>Nivel Nacional</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-blue">•</span>
                        <span>Nivel Internacional</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-federation-blue hover:bg-federation-celeste text-white">
                      Descargar Reglamento
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 federation-red">Patinaje de Velocidad</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-red">•</span>
                        <span>Categoría C - Iniciación</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-red">•</span>
                        <span>Categoría B - Intermedio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-red">•</span>
                        <span>Categoría A - Avanzado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-red">•</span>
                        <span>Nivel Nacional</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2 text-federation-red">•</span>
                        <span>Nivel Internacional</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-federation-red hover:bg-federation-yellow text-white">
                      Descargar Reglamento
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección Misión */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image src="/equipo-federacion-patinaje-reunion.jpg" alt="Misión" fill className="object-contain" />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-4 federation-blue">Nuestra Misión</h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Promover y desarrollar el patinaje artístico y de velocidad en Gran Buenos Aires, brindando
                        oportunidades de crecimiento deportivo a atletas de todas las edades y niveles.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Trabajamos para mantener los más altos estándares de calidad en la organización de competencias,
                        capacitaciones y eventos que fortalezcan nuestra comunidad deportiva.
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Sección Contacto */}
          <section id="contacto" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 federation-blue">Contacto</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 federation-blue">Sede</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">📍</span>
                        <div>
                          <p className="font-semibold text-lg mb-1">Dirección</p>
                          <p className="text-gray-600">Ombú 3334, San Justo. Buenos Aires 🇦🇷</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">📧</span>
                        <div>
                          <p className="font-semibold text-lg mb-1">Email</p>
                          <a href={`mailto:${EMAIL}`} className="text-gray-600">{EMAIL}</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">📞</span>
                        <div>
                          <p className="font-semibold text-lg mb-1">Teléfono</p>
                          <p className="text-gray-600">+54 11 1234-5678</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <p className="font-semibold mb-4 text-lg">Síguenos en redes sociales</p>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="w-14 h-14 bg-federation-blue rounded-full flex items-center justify-center text-white hover:bg-federation-celeste transition-colors text-xl font-bold"
                          aria-label="Facebook"
                        >
                          F
                        </a>
                        <a
                          href="#"
                          className="w-14 h-14 bg-federation-red rounded-full flex items-center justify-center text-white hover:bg-federation-yellow transition-colors text-xl font-bold"
                          aria-label="Instagram"
                        >
                          I
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 federation-green">Ubicación</h3>
                    <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-4">
                      
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.124459576249!2d-58.55670682419815!3d-34.67680817292813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc882ab3cee61%3A0x4e0bf5d00412867d!2sOmb%C3%BA%203334%2C%20B1754BCP%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1763167300140!5m2!1ses!2sar" className="border-0 w-full h-full" loading="lazy"></iframe>
                      
                    </div>
                    
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Footer/>
        </main>
      </div>
    </>
  )
}
