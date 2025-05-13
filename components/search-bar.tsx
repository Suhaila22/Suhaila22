"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function SearchBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for research topics, journals, or keywords..."
          className="w-full bg-background pl-8 md:w-2/3 lg:w-1/2"
          onClick={() => setOpen(true)}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for research topics, journals, or keywords..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Trending Topics">
            <CommandItem>Tissue Engineering</CommandItem>
            <CommandItem>Bioprinting</CommandItem>
            <CommandItem>Neural Interfaces</CommandItem>
            <CommandItem>Nanomedicine</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Top Journals">
            <CommandItem>Nature Biomedical Engineering</CommandItem>
            <CommandItem>IEEE Transactions on Biomedical Engineering</CommandItem>
            <CommandItem>Biomaterials</CommandItem>
            <CommandItem>Journal of Neural Engineering</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
