import { DashboardCards } from "@/components/dashboard-cards"
import { SearchBar } from "@/components/search-bar"
import { TrendingTopics } from "@/components/trending-topics"
import { RecentPapers } from "@/components/recent-papers"
import { UpcomingConferences } from "@/components/upcoming-conferences"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Research Dashboard</h1>
        <p className="text-muted-foreground">Explore the latest trends in biomedical engineering research</p>
      </div>
      <SearchBar />
      <DashboardCards />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TrendingTopics />
        <RecentPapers />
        <UpcomingConferences />
      </div>
    </div>
  )
}
