import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "StreamLine has revolutionized how we manage our operations. The efficiency gains are remarkable.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, GrowthCorp",
    content: "The collaboration features are outstanding. Our team productivity has increased by 40%.",
    rating: 5,
    avatar: "/professional-man-operations-director-headshot.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager, InnovateLab",
    content: "Best investment we've made. The analytics help us make better decisions every day.",
    rating: 5,
    avatar: "/professional-woman-project-manager-headshot.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
