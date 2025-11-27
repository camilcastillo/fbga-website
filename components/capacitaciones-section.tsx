import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Award, CheckCircle } from "lucide-react"

export function CapacitacionesSection() {
  return (
    <section id="capacitaciones" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-destructive bg-clip-text text-transparent">
              Capacitaciones
            </span>{" "}
            y Formación
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Programas de formación integral para patinadores, entrenadores y jueces. Desarrolla tus habilidades con los
            mejores profesionales del país.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-secondary to-destructive text-white animate-pulse">
                ¡INSCRIPCIONES ABIERTAS!
              </Badge>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Formación de Jueces Federativos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Únete al cuerpo de jueces oficiales de la Federación Gran Buenos Aires. Curso intensivo con
                certificación nacional válida para todas las competencias.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold">Duración</h4>
                  <p className="text-muted-foreground">6 meses intensivos</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl">
                  <Clock className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-semibold">Modalidad</h4>
                  <p className="text-muted-foreground">Presencial + Online</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/50 rounded-xl">
                  <Award className="h-8 w-8 text-destructive mb-2" />
                  <h4 className="font-semibold">Certificación</h4>
                  <p className="text-muted-foreground">Juez Federativo Oficial</p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-6 border border-primary/20">
                <h4 className="font-semibold mb-4 text-lg">Incluye:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Manual oficial de arbitraje</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm">Prácticas en competencias reales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-destructive mr-2" />
                    <span className="text-sm">Certificado nacional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Seguimiento personalizado</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  Inscribirse Ahora
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 bg-white/70 backdrop-blur-sm border-2 border-primary/30"
                >
                  Más Información
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
