import { CalendarDays, FileText, TrendingUp, DollarSign, GraduationCap, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function DashboardCards() {
  const cards = [
    {
      title: "AI Trend Analysis",
      description: "Discover emerging research trends",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      href: "/trends",
    },
    {
      title: "Conference Tracker",
      description: "Upcoming global conferences",
      icon: <CalendarDays className="h-5 w-5 text-primary" />,
      href: "/conferences",
    },
    {
      title: "PDF Summarizer",
      description: "AI-powered paper summaries",
      icon: <FileText className="h-5 w-5 text-primary" />,
      href: "/summarizer",
    },
    {
      title: "Funding & Grants",
      description: "Research funding opportunities",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      href: "/funding",
    },
    {
      title: "Academic Positions",
      description: "Research & postdoc openings",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      href: "/positions",
    },
    {
      title: "Research Assistant",
      description: "AI-powered research Q&A",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      href: "/assistant",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link href={card.href} key={card.title}>
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
