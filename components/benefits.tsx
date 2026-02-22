import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Shield, Users, Zap, Award } from "lucide-react"
import { GISMapBackground } from "@/components/GISMapBackground"

const benefits = [
  {
    icon: CheckCircle2,
    title: "Proven Accuracy",
    description: "99.9% data accuracy with quality assurance protocols",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient project completion within agreed timelines",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Secure handling of sensitive municipal information",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified surveyors and GIS professionals",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Latest GPS, GIS, and surveying equipment",
  },
  {
    icon: Award,
    title: "Compliance",
    description: "Adherence to government standards and regulations",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Why Choose GeoQuantix Technologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed px-4 sm:px-0">
            Trusted by municipal corporations across the region for reliable GIS survey services
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GIS Enhanced Card */}
        <Card className="relative mt-12 sm:mt-16 bg-primary text-primary-foreground border-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/gis-clear.jpeg')",
            }}
          />
  
          {/* GIS Background */}
          <GISMapBackground className="opacity-50" />

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />

          <CardContent className="relative z-10 p-8 sm:p-12 text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              Ready to Modernize Your Municipal Data?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed px-4 sm:px-0">
              Join leading municipal corporations in leveraging accurate geospatial data for better urban governance
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}