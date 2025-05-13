"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ExternalLink } from "lucide-react"

export function ConferenceMap() {
  const [selectedConference, setSelectedConference] = useState(null)

  const conferences = [
    {
      id: 1,
      name: "International Conference on Biomedical Engineering",
      date: "June 15-18, 2023",
      location: "Boston, USA",
      deadline: "May 30, 2023",
      position: { top: "30%", left: "25%" },
    },
    {
      id: 2,
      name: "European Society for Biomaterials Annual Conference",
      date: "July 5-8, 2023",
      location: "Barcelona, Spain",
      deadline: "June 10, 2023",
      position: { top: "35%", left: "48%" },
    },
    {
      id: 3,
      name: "IEEE Engineering in Medicine and Biology Conference",
      date: "July 23-27, 2023",
      location: "Sydney, Australia",
      deadline: "June 15, 2023",
      position: { top: "65%", left: "85%" },
    },
    {
      id: 4,
      name: "World Congress on Medical Physics and Biomedical Engineering",
      date: "August 10-14, 2023",
      location: "Singapore",
      deadline: "July 1, 2023",
      position: { top: "55%", left: "75%" },
    },
    {
      id: 5,
      name: "International Symposium on Biomedical Imaging",
      date: "September 5-8, 2023",
      location: "Tokyo, Japan",
      deadline: "July 20, 2023",
      position: { top: "40%", left: "82%" },
    },
  ]

  return (
    <div className="relative h-[500px] rounded-lg border overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-50"></div>

      {conferences.map((conference) => (
        <div
          key={conference.id}
          className="absolute z-10"
          style={{ top: conference.position.top, left: conference.position.left }}
        >
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-background shadow-md hover:bg-background/90"
            onClick={() => setSelectedConference(conference)}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {conference.location}
          </Button>
        </div>
      ))}

      {selectedConference && (
        <Card className="absolute bottom-4 left-4 right-4 z-20 max-w-md mx-auto">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{selectedConference.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{selectedConference.date}</span>
                </div>
                <p className="text-sm mt-1">{selectedConference.location}</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Deadline: {selectedConference.deadline}
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
