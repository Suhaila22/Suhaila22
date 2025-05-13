"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, CalendarDays, ExternalLink } from "lucide-react"

export function PositionsMap() {
  const [selectedPosition, setSelectedPosition] = useState(null)

  const positions = [
    {
      id: 1,
      title: "Assistant Professor of Biomedical Engineering",
      institution: "Stanford University",
      location: "Stanford, CA, USA",
      type: "faculty",
      deadline: "July 15, 2023",
      position: { top: "38%", left: "18%" },
    },
    {
      id: 2,
      title: "Postdoctoral Researcher - Neural Interfaces",
      institution: "MIT",
      location: "Cambridge, MA, USA",
      type: "postdoc",
      deadline: "June 30, 2023",
      position: { top: "35%", left: "25%" },
    },
    {
      id: 3,
      title: "Associate Professor of Medical Imaging",
      institution: "Imperial College London",
      location: "London, UK",
      type: "faculty",
      deadline: "August 15, 2023",
      position: { top: "32%", left: "47%" },
    },
    {
      id: 4,
      title: "Postdoctoral Fellow - Biomechanics",
      institution: "ETH Zurich",
      location: "Zurich, Switzerland",
      type: "postdoc",
      deadline: "July 5, 2023",
      position: { top: "35%", left: "50%" },
    },
    {
      id: 5,
      title: "Research Scientist - Biosensors",
      institution: "National University of Singapore",
      location: "Singapore",
      type: "research",
      deadline: "June 20, 2023",
      position: { top: "55%", left: "75%" },
    },
  ]

  return (
    <div className="relative h-[500px] rounded-lg border overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-50"></div>

      {positions.map((position) => (
        <div
          key={position.id}
          className="absolute z-10"
          style={{ top: position.position.top, left: position.position.left }}
        >
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full bg-background shadow-md hover:bg-background/90 ${
              position.type === "faculty"
                ? "border-primary"
                : position.type === "postdoc"
                  ? "border-secondary"
                  : "border-muted"
            }`}
            onClick={() => setSelectedPosition(position)}
          >
            <span
              className={`relative flex h-2 w-2 mr-2 ${
                position.type === "faculty"
                  ? "bg-primary"
                  : position.type === "postdoc"
                    ? "bg-secondary"
                    : "bg-muted-foreground"
              }`}
            ></span>
            {position.institution}
          </Button>
        </div>
      ))}

      {selectedPosition && (
        <Card className="absolute bottom-4 left-4 right-4 z-20 max-w-md mx-auto">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{selectedPosition.title}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <Building className="h-3.5 w-3.5" />
                  <span>{selectedPosition.institution}</span>
                </div>
                <p className="text-sm mt-1">{selectedPosition.location}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>Deadline: {selectedPosition.deadline}</span>
                </div>
                <Badge variant="outline" className="mt-2">
                  {selectedPosition.type === "faculty"
                    ? "Faculty Position"
                    : selectedPosition.type === "postdoc"
                      ? "Postdoctoral Position"
                      : "Research Position"}
                </Badge>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3.5 w-3.5" />
                Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
