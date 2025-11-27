import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Target, Heart, Building2, Scale } from "lucide-react"

export function InstitucionalSection() {
  const valores = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Comunidad",
      description: "Fomentamos un ambiente inclusivo donde cada patinador puede desarrollar su potencial máximo.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-secondary" />,
      title: "Excelencia",
      description: "Buscamos la perfección técnica y artística en cada presentación y competencia.",
    },
    {
      icon: <Target className="h-8 w-8 text-destructive" />,
      title: "Disciplina",
      description: "Promovemos la dedicación y el compromiso como pilares del crecimiento deportivo.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent text-accent-foreground" />,
      title: "Pasión",
      description: "El amor por el patín artístico es el motor que impulsa todo lo que hacemos.",
    },
  ]

  const comisionDirectiva = [
    { cargo: "Presidente", nombre: "Dr. Roberto Martínez" },
    { cargo: "Vicepresidente", nombre: "Lic. Ana García" },
    { cargo: "Secretario", nombre: "Prof. Carlos López" },
    { cargo: "Tesorero", nombre: "Cont. María Fernández" },
    { cargo: "Vocal 1°", nombre: "Lic. Juan Pérez" },
    { cargo: "Vocal 2°", nombre: "Prof. Laura Rodríguez" },
  ]

  const colegioArbitros = [
    { cargo: "Presidente del Colegio", nombre: "Juez Int. Patricia Silva" },
    { cargo: "Secretario", nombre: "Juez Nac. Miguel Torres" },
    { cargo: "Vocal", nombre: "Juez Reg. Carmen Díaz" },
    { cargo: "Vocal", nombre: "Juez Reg. Alberto Morales" },
  ]

  return (
    <section id="institucional" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-destructive/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-destructive bg-clip-text text-transparent">
              Institución
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Somos la Federación Gran Buenos Aires, comprometida con el desarrollo del patín artístico, formando atletas
            de élite y promoviendo los valores del deporte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valores.map((valor, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-fit mx-auto">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{valor.title}</h3>
                <p className="text-muted-foreground text-pretty">{valor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">Comisión Directiva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comisionDirectiva.map((miembro, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-lg border border-primary/10 hover:bg-white/90 transition-colors"
                  >
                    <span className="font-medium text-primary">{miembro.cargo}</span>
                    <span className="text-muted-foreground">{miembro.nombre}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-destructive/5 border-2 border-secondary/20 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Scale className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl text-secondary">Colegio de Árbitros y Jueces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {colegioArbitros.map((miembro, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-lg border border-secondary/10 hover:bg-white/90 transition-colors"
                  >
                    <span className="font-medium text-secondary">{miembro.cargo}</span>
                    <span className="text-muted-foreground">{miembro.nombre}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Fundada con la visión de elevar el nivel del patín artístico en Gran Buenos Aires, nuestra federación ha
              sido pionera en la formación de campeones nacionales e internacionales.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A lo largo de los años, hemos desarrollado programas de entrenamiento de clase mundial, establecido
              alianzas estratégicas y creado oportunidades para que nuestros atletas compitan en los escenarios más
              prestigiosos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoy continuamos creciendo, innovando en nuestras metodologías de enseñanza y manteniendo nuestro
              compromiso con la excelencia deportiva en toda la región.
            </p>
          </div>
          <div className="relative">
            <img
              src="/logo-federacion.png"
              alt="Logo Federación Gran Buenos Aires"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
