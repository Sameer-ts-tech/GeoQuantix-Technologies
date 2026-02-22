import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Work Assignment",
    description:
      "Nagar Nigam submits survey requirements through our platform with project specifications and area details.",
  },
  {
    number: "02",
    title: "Field Survey",
    description: "Our certified surveyors conduct on-ground property assessments using GPS and GIS equipment.",
  },
  {
    number: "03",
    title: "Data Processing",
    description: "Collected data is validated, processed, and integrated into structured digital formats.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Complete survey reports delivered with interactive maps, databases, and ongoing technical support.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">Our Streamlined Process</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed px-4 sm:px-0">
            From initial assignment to final delivery, we ensure transparency and quality at every step
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="relative overflow-hidden">
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl font-bold text-accent/20">{step.number}</div>
                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}