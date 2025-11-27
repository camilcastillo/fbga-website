import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Trophy, Star, Medal, Target, Crown, Award, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pattern-skating">
      <div className="absolute inset-0 gradient-elite-hero animate-gradient-flow" />
      <div className="absolute inset-0 pattern-ice opacity-30" />

      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-elite-float" />
      <div
        className="absolute top-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-elite-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-36 h-36 bg-accent/20 rounded-full blur-3xl animate-elite-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-destructive/20 rounded-full blur-3xl animate-elite-float"
        style={{ animationDelay: "6s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-elite-primary rounded-full blur-3xl opacity-60 animate-premium-glow scale-200"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>

                <Image
                  src="/logo-federacion.png"
                  alt="Logo Federación Gran Buenos Aires"
                  width={160}
                  height={160}
                  className="relative rounded-full border-6 border-white shadow-2xl hover-elite gpu-accelerated"
                />

                {/* Elite decorative crown */}
                <div className="absolute -top-4 -right-4 bg-accent rounded-full p-3 shadow-2xl animate-elite-float">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-2 -left-2 bg-destructive rounded-full p-2 shadow-2xl animate-elite-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div
                  className="absolute top-1/2 -right-6 bg-secondary rounded-full p-2 shadow-2xl animate-elite-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-4 glass-elite rounded-full px-8 py-4 mb-12 border border-primary/30 hover-elite">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">+100 clubes confían en nosotros</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-accent fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-balance mb-8 leading-none text-shadow-elite">
              <span className="text-gradient-elite block animate-elegant-slide">Federación</span>
              <span className="text-primary block animate-elegant-slide" style={{ animationDelay: "0.2s" }}>
                Gran Buenos Aires
              </span>
              <span
                className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground font-semibold block mt-4 animate-elegant-slide"
                style={{ animationDelay: "0.4s" }}
              >
                Patín Artístico de Élite
              </span>
            </h1>

            <p className="text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl leading-relaxed">
              Somos una <span className="font-bold text-primary">gran familia</span> donde damos lo mejor para seguir
              creciendo. Promovemos la excelencia en el patín artístico con{" "}
              <span className="font-bold text-secondary">entrenadores especializados</span> y competencias desde{" "}
              <span className="font-bold text-destructive">categoría C hasta internacional</span>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              {[
                { name: "Libre", color: "primary", icon: Star },
                { name: "Cuartetos", color: "secondary", icon: Users },
                { name: "Figuras Obligatorias", color: "accent", icon: Target },
                { name: "Show", color: "destructive", icon: Trophy },
                { name: "Precision", color: "primary", icon: Medal },
                { name: "Danza", color: "secondary", icon: Crown },
                { name: "Parejas", color: "accent", icon: Award },
              ].map((discipline) => {
                const IconComponent = discipline.icon
                return (
                  <div
                    key={discipline.name}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold text-white bg-${discipline.color} hover-elite cursor-pointer shadow-xl glass-effect border border-white/20`}
                  >
                    <IconComponent className="h-5 w-5" />
                    {discipline.name}
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-elite-primary hover:shadow-2xl animate-premium-glow text-white font-bold rounded-full shadow-2xl hover-elite"
              >
                Inscribirse Ahora
                <ArrowRight className="ml-3 h-7 w-7" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-12 py-6 glass-elite border-3 border-primary/50 hover:bg-primary/20 text-primary font-bold rounded-full hover-elite bg-transparent"
              >
                <Play className="mr-3 h-7 w-7" />
                Ver Competencias
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-6 border-white bg-gradient-elite-primary p-3 hover-elite">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/patinadores-artisticos-en-competencia-sobre-hielo-.jpg"
                    alt="Competencia de Patín Artístico Gran Buenos Aires"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 gpu-accelerated"
                  />
                </div>
              </div>

              <div className="absolute -top-8 -left-8 glass-elite rounded-full p-5 shadow-2xl animate-elite-float border-2 border-white/30">
                <Trophy className="h-10 w-10 text-accent" />
              </div>
              <div
                className="absolute -top-8 -right-8 glass-elite rounded-full p-5 shadow-2xl animate-elite-float border-2 border-white/30"
                style={{ animationDelay: "1s" }}
              >
                <Crown className="h-10 w-10 text-destructive" />
              </div>
              <div
                className="absolute -bottom-8 -left-8 glass-elite rounded-full p-5 shadow-2xl animate-elite-float border-2 border-white/30"
                style={{ animationDelay: "2s" }}
              >
                <Target className="h-10 w-10 text-secondary" />
              </div>
              <div
                className="absolute -bottom-8 -right-8 glass-elite rounded-full p-5 shadow-2xl animate-elite-float border-2 border-white/30"
                style={{ animationDelay: "3s" }}
              >
                <Medal className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
