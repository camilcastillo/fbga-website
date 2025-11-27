import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Mail, MessageCircle, Star } from "lucide-react"

export function IndumentariaSection() {
  const productos = [
    {
      name: "Conjunto Oficial Federación",
      category: "Merchandise Oficial",
      image: "/vestido-elegante-de-patinaje-artistico-con-cristal.jpg",
      features: ["Logo oficial bordado", "Colores institucionales", "Tallas disponibles: XS a XXL"],
      popular: true,
    },
    {
      name: "Campera Oficial",
      category: "Merchandise Oficial",
      image: "/ropa-deportiva-para-entrenamiento-de-patinaje.jpg",
      features: ["Material impermeable", "Diseño exclusivo", "Ideal para competencias"],
      popular: false,
    },
    {
      name: "Remera Técnica",
      category: "Merchandise Oficial",
      image: "/patines-blancos-profesionales-de-patinaje-artistic.jpg",
      features: ["Tela transpirable", "Corte deportivo", "Logo reflectivo"],
      popular: false,
    },
    {
      name: "Buzo Oficial",
      category: "Merchandise Oficial",
      image: "/ropa-deportiva-para-entrenamiento-de-patinaje.jpg",
      features: ["Algodón premium", "Capucha ajustable", "Bolsillo canguro"],
      popular: false,
    },
  ]

  return (
    <section id="indumentaria" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            <span className="text-primary">Merchandise</span> Oficial
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Prendas oficiales de la Federación Gran Buenos Aires. Solicita cotización y encarga tu conjunto
            personalizado con los colores y logo institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productos.map((producto, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow relative">
              {producto.popular && (
                <Badge className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground">Más Popular</Badge>
              )}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={producto.image || "/placeholder.svg"}
                  alt={producto.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit text-xs">
                  {producto.category}
                </Badge>
                <CardTitle className="text-lg">{producto.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4">
                  {producto.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">¿Querés encargar tu conjunto?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contactanos para solicitar cotización personalizada. Tenemos todos los talles y podemos personalizar con
              tu nombre o número.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3 min-w-[200px]">
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/50 min-w-[200px]">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="flex flex-col items-center">
              <ShoppingBag className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold mb-1">Envío a Domicilio</h4>
              <p className="text-sm text-muted-foreground">A todo Gran Buenos Aires</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 text-secondary mb-2" />
              <h4 className="font-semibold mb-1">Calidad Premium</h4>
              <p className="text-sm text-muted-foreground">Materiales de primera</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold mb-1">Asesoramiento</h4>
              <p className="text-sm text-muted-foreground">Te ayudamos a elegir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
