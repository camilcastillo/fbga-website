import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react"

export function ContactoSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros programas, competencias o
            cualquier consulta que tengas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Av. Corrientes 1234, CABA
                      <br />
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      +54 11 4567-8900
                      <br />
                      WhatsApp: +54 9 11 1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@federacionpatin.com.ar
                      <br />
                      competencias@federacionpatin.com.ar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Horarios de Atención</h4>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-semibold mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Sedes */}
            <Card>
              <CardHeader>
                <CardTitle>Nuestras Sedes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Sede Central - CABA</h5>
                    <p className="text-sm text-muted-foreground">Av. Corrientes 1234, Capital Federal</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Sede Norte - San Isidro</h5>
                    <p className="text-sm text-muted-foreground">Av. Libertador 5678, San Isidro</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Sede Sur - Lomas de Zamora</h5>
                    <p className="text-sm text-muted-foreground">Av. Hipólito Yrigoyen 9012, Lomas de Zamora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <Input id="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium mb-2">
                        Apellido *
                      </label>
                      <Input id="apellido" placeholder="Tu apellido" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <Input id="telefono" placeholder="+54 11 1234-5678" />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                      Asunto *
                    </label>
                    <Input id="asunto" placeholder="¿En qué podemos ayudarte?" required />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} required />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
