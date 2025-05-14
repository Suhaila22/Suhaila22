"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [conferences, setConferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch conferences on mount
  useEffect(() => {
    async function fetchConferences() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/conferences");
        if (!response.ok) throw new Error("Failed to fetch conferences");
        const data = await response.json();
        setConferences(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchConferences();
  }, []);

  // Filter conferences based on search query
  const filteredConferences = conferences.filter((conf) =>
    conf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for conferences..."
          className="w-full bg-background pl-8 md:w-2/3 lg:w-1/2"
          onClick={() => setOpen(true)}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogTitle>Search Conferences</DialogTitle>
        </VisuallyHidden>
        <DialogDescription className="sr-only">
          Search for conferences by name, date, or keywords.
        </DialogDescription>
        <CommandInput
          placeholder="Search for conferences..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          {isLoading ? (
            <CommandEmpty>Loading...</CommandEmpty>
          ) : error ? (
            <CommandEmpty>Failed to load conferences: {error}</CommandEmpty>
          ) : filteredConferences.length === 0 ? (
            <CommandEmpty>No results found.</CommandEmpty>
          ) : (
            <CommandGroup heading="Conferences">
              {filteredConferences.map((conf) => (
                <CommandItem
                  key={conf.id}
                  onSelect={() => {
                    router.push(`/conferences/${conf.id}`);
                    setOpen(false);
                  }}
                >
                  {conf.name} - {conf.date}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
