import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, ExternalLink, Star, Clock } from "lucide-react"

const conferences = [
  {
    id: 1,
    name: "International Conference on Biomedical Engineering",
    date: "June 15-18, 2023",
    location: "Boston, USA",
    deadline: "May 30, 2023",
    website: "https://example.com/icbe2023",
    topics: ["Tissue Engineering", "Biomaterials", "Medical Devices"],
    daysLeft: 21,
  },
  {
    id: 2,
    name: "European Society for Biomaterials Annual Conference",
    date: "July 5-8, 2023",
    location: "Barcelona, Spain",
    deadline: "June 10, 2023",
    website: "https://example.com/esb2023",
    topics: ["Biomaterials", "Regenerative Medicine", "Implants"],
    daysLeft: 32,
  },
  {
    id: 3,
    name: "IEEE Engineering in Medicine and Biology Conference",
    date: "July 23-27, 2023",
    location: "Sydney, Australia",
    deadline: "June 15, 2023",
    website: "https://example.com/embc2023",
    topics: ["Medical Imaging", "Biosensors", "Neural Engineering"],
    daysLeft: 37,
  },
  {
    id: 4,
    name: "World Congress on Medical Physics and Biomedical Engineering",
    date: "August 10-14, 2023",
    location: "Singapore",
    deadline: "July 1, 2023",
    website: "https://example.com/wcmpbe2023",
    topics: ["Medical Physics", "Biomedical Engineering", "Healthcare Technology"],
    daysLeft: 53,
  },
  {
    id: 5,
    name: "International Symposium on Biomedical Imaging",
    date: "September 5-8, 2023",
    location: "Tokyo, Japan",
    deadline: "July 20, 2023",
    website: "https://example.com/isbi2023",
    topics: ["Medical Imaging", "Image Processing", "AI in Healthcare"],
    daysLeft: 72,
  },
]

export function ConferenceList() {
  return (
    <div className="space-y-6">
      {conferences.map((conference) => (
        <div key={conference.id} className="rounded-lg border p-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-lg">{conference.name}</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Star className="h-4 w-4" />
                  <span className="sr-only">Save conference</span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{conference.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{conference.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Abstract Deadline: {conference.deadline}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {conference.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Badge variant="outline" className={conference.daysLeft <= 30 ? "text-red-500 border-red-200" : ""}>
                {conference.daysLeft} days until deadline
              </Badge>
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3.5 w-3.5" />
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
