import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Building, MapPin, ExternalLink } from "lucide-react"

const positions = [
  {
    id: 1,
    title: "Assistant Professor of Biomedical Engineering",
    institution: "Stanford University",
    location: "Stanford, CA, USA",
    type: "faculty",
    deadline: "July 15, 2023",
    posted: "May 1, 2023",
    specialization: ["Tissue Engineering", "Biomaterials", "Regenerative Medicine"],
    description:
      "The Department of Biomedical Engineering at Stanford University invites applications for a tenure-track faculty position at the Assistant Professor level. We seek candidates with expertise in tissue engineering, biomaterials, or regenerative medicine.",
  },
  {
    id: 2,
    title: "Postdoctoral Researcher - Neural Interfaces",
    institution: "MIT",
    location: "Cambridge, MA, USA",
    type: "postdoc",
    deadline: "June 30, 2023",
    posted: "May 5, 2023",
    specialization: ["Neural Interfaces", "Bioelectronics", "Signal Processing"],
    description:
      "The Neural Engineering Lab at MIT is seeking a postdoctoral researcher to work on developing next-generation neural interfaces for biomedical applications. The ideal candidate will have experience in bioelectronics, signal processing, and neural recording technologies.",
  },
  {
    id: 3,
    title: "Associate Professor of Medical Imaging",
    institution: "Imperial College London",
    location: "London, UK",
    type: "faculty",
    deadline: "August 15, 2023",
    posted: "May 10, 2023",
    specialization: ["Medical Imaging", "AI in Healthcare", "Computational Biology"],
    description:
      "The Department of Bioengineering at Imperial College London is seeking an Associate Professor specializing in medical imaging technologies. The successful candidate will lead research in advanced imaging methods and their application in clinical settings.",
  },
  {
    id: 4,
    title: "Postdoctoral Fellow - Biomechanics",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "postdoc",
    deadline: "July 5, 2023",
    posted: "May 12, 2023",
    specialization: ["Biomechanics", "Computational Modeling", "Orthopedics"],
    description:
      "The Laboratory for Biomechanics at ETH Zurich is looking for a postdoctoral fellow to work on computational modeling of musculoskeletal systems. The project focuses on developing patient-specific models for orthopedic applications.",
  },
  {
    id: 5,
    title: "Research Scientist - Biosensors",
    institution: "National University of Singapore",
    location: "Singapore",
    type: "research",
    deadline: "June 20, 2023",
    posted: "May 3, 2023",
    specialization: ["Biosensors", "Microfluidics", "Point-of-Care Diagnostics"],
    description:
      "The Biomedical Engineering Department at NUS is seeking a Research Scientist to lead projects in biosensor development for point-of-care diagnostics. The position involves designing and testing novel sensing platforms for healthcare applications.",
  },
]

export function PositionsList({ filter = "all" }) {
  const filteredPositions = filter === "all" ? positions : positions.filter((pos) => pos.type === filter)

  return (
    <div className="space-y-6">
      {filteredPositions.map((position) => (
        <div key={position.id} className="rounded-lg border p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">{position.title}</h3>
              <Badge variant="outline">
                {position.type === "faculty"
                  ? "Faculty Position"
                  : position.type === "postdoc"
                    ? "Postdoctoral Position"
                    : "Research Position"}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span>{position.institution}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{position.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>Deadline: {position.deadline}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {position.specialization.map((spec) => (
                <Badge key={spec} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">{position.description}</p>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-muted-foreground">Posted: {position.posted}</span>
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3.5 w-3.5" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
