import { Card, CardContent } from "@/components/ui/card"
import { Map, Layers, Database, FileSearch, Building2, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Map,
    title: "Property Mapping",
    description:
      "Comprehensive GIS-based property surveys with precise boundary identification and geospatial coordinates.",
  },
  {
    icon: Layers,
    title: "Spatial Data Collection",
    description:
      "Systematic data gathering for municipal assets, infrastructure, and land records using advanced surveying techniques.",
  },
  {
    icon: Database,
    title: "Digital Database Creation",
    description:
      "Transform physical records into structured digital databases for easy access and long-term maintenance.",
  },
  {
    icon: FileSearch,
    title: "Property Assessment",
    description: "Detailed property evaluations including dimensions, usage patterns, and compliance verification.",
  },
  {
    icon: Building2,
    title: "Urban Planning Support",
    description: "Data-driven insights for municipal development, zoning, and infrastructure planning initiatives.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive reports with visualizations, trends analysis, and actionable recommendations.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">Comprehensive GIS Survey Solutions</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed px-4 sm:px-0">
            End-to-end geospatial services designed specifically for municipal corporations and government bodies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <Card key={i} className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}