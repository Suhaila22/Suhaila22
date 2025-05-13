import {
  LayoutDashboard,
  TrendingUp,
  CalendarDays,
  FileText,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Settings,
} from "lucide-react"

export const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "AI Trend Analysis",
    href: "/trends",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    name: "Conference Tracker",
    href: "/conferences",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    name: "PDF Summarizer",
    href: "/summarizer",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Funding & Grants",
    href: "/funding",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    name: "Academic Positions",
    href: "/positions",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    name: "Research Assistant",
    href: "/assistant",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]
