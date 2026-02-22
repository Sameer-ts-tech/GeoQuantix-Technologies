"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight,ExternalLink } from "lucide-react"
import { projectsData } from "@/data/projects"



export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
const projects = projectsData
  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Trusted by leading Nagar Palikas and Municipal Corporations across India for accurate GIS surveys and
            property mapping
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col items-center gap-8">
            {/* Card Stack */}
            <div className="w-full max-w-2xl relative h-80 sm:70">
              {projects.map((project, index) => {
                const position = (index - currentIndex + projects.length) % projects.length
                const isVisible = position < 3

                return (
                  <div
                    key={project.id}
                    className={`absolute w-full transition-all duration-300 ease-out ${
                      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    style={{
                      transform: `translateY(${position * 16}px) scale(${1 - position * 0.05})`,
                      zIndex: projects.length - position,
                    }}
                  >
                    <Card className="h-full border border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-xl md:text-2xl text-foreground leading-tight flex-1">
                            {project.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className={
                              project.status === "completed"
                                ? "bg-green-50 text-green-700 border-green-200 whitespace-nowrap"
                                : "bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap"
                            }
                          >
                            {project.status === "completed" ? "Completed" : "Ongoing"}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Description */}
                        <p className="text-base text-muted-foreground">{project.description}</p>

                        {/* Stats */}
                        <div className="space-y-3 pt-4 border-t border-border">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Started:</span>
                            <span className="font-semibold text-foreground">{project.startDate}</span>
                          </div>
                          {project.propertiesMapped !== undefined && (
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Properties Mapped:</span>
                                <span className="font-semibold text-primary">
                                {project.propertiesMapped === 0
                                    ? "In Progress"
                                    : project.propertiesMapped.toLocaleString()}
                                </span>
                            </div>
                            )}

                        </div>
                        <div className="pt-2">
                          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white gap-2 hover:text-emerald-400">
                            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                              View Project Portal
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={prevCard}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Card Indicator */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextCard}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Card Counter */}
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} of {projects.length}
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
  
  <div className="bg-primary/5 rounded-lg p-1 sm:p-4 md:p-6 text-center border border-primary/20 overflow-hidden">
    <div className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-1 whitespace-nowrap">
      {projects.filter((p) => p.status === "completed").length}
    </div>
    <p className="text-[9px] sm:text-sm text-muted-foreground whitespace-nowrap">
      Completed Projects
    </p>
  </div>

  <div className="bg-blue-50 rounded-lg p-1 sm:p-4 md:p-6 text-center border border-blue-200 overflow-hidden">
    <div className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700 mb-1 whitespace-nowrap">
      {projects.filter((p) => p.status === "ongoing").length}
    </div>
    <p className="text-[9px] sm:text-sm text-muted-foreground whitespace-nowrap">
      Ongoing Projects
    </p>
  </div>

  <div className="bg-green-50 rounded-lg p-1 sm:p-4 md:p-6 text-center border border-green-200 overflow-hidden">
    <div className="text-xl sm:text-2xl md:text-4xl font-bold text-green-700 mb-1 whitespace-nowrap">
      {(projects.reduce((acc, p) => acc + (p.propertiesMapped || 0), 0) / 1000).toFixed(1)}K+
    </div>
    <p className="text-[9px] sm:text-sm text-muted-foreground whitespace-nowrap">
      Total Properties Mapped
    </p>
  </div>

</div>

      </div>
    </section>
  )
}
