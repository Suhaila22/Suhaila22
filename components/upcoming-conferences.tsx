import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarDays, MapPin } from "lucide-react"

const conferences = [
  {
    name: "International Conference on Biomedical Engineering",
    date: "June 15-18, 2023",
    location: "Boston, USA",
    deadline: "May 30, 2023",
  },
  {
    name: "European Society for Biomaterials Annual Conference",
    date: "July 5-8, 2023",
    location: "Barcelona, Spain",
    deadline: "June 10, 2023",
  },
  {
    name: "IEEE Engineering in Medicine and Biology Conference",
    date: "July 23-27, 2023",
    location: "Sydney, Australia",
    deadline: "June 15, 2023",
  },
  {
    name: "World Congress on Medical Physics and Biomedical Engineering",
    date: "August 10-14, 2023",
    location: "Singapore",
    deadline: "July 1, 2023",
  },
  {
    name: "International Symposium on Biomedical Imaging",
    date: "September 5-8, 2023",
    location: "Tokyo, Japan",
    deadline: "July 20, 2023",
  },
]

export function UpcomingConferences() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Upcoming Conferences</CardTitle>
        <CardDescription>Conferences with approaching deadlines</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-4">
            {conferences.map((conference, index) => (
              <div key={index} className="space-y-1">
                <h3 className="font-medium leading-tight">{conference.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{conference.date}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{conference.location}</span>
                </div>
                <p className="text-xs font-medium text-primary">Abstract Deadline: {conference.deadline}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
