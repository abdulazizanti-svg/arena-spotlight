import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { communities, formatCompact, formatUzs, type Community, type Platform } from "@/lib/arrena-data";

const categories: ("All" | Platform)[] = ["All", "Minecraft", "CS2", "Discord", "Telegram"];

function ChallengeDialog({ community }: { community: Community }) {
  const minimum = community.bid + 200000;
  return (
    <Dialog>
      <DialogTrigger asChild><Button size="sm" variant={community.rank === 1 ? "default" : "outline"}>Challenge</Button></DialogTrigger>
      <DialogContent className="max-w-md rounded-lg border-border p-0 shadow-2xl">
        <DialogHeader className="border-b border-border p-6 pr-12">
          <DialogTitle className="font-display text-xl">Challenge #{community.rank}</DialogTitle>
          <DialogDescription>Move your community above {community.name}.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 px-6 pt-2 text-sm">
          <div><p className="text-xs text-muted-foreground">Current bid</p><p className="mt-1 font-display font-semibold tabular-nums">{formatUzs(community.bid)}</p></div>
          <div><p className="text-xs text-muted-foreground">Minimum bid</p><p className="mt-1 font-display font-semibold text-primary tabular-nums">{formatUzs(minimum)}</p></div>
        </div>
        <div className="px-6"><label className="mb-2 block text-xs font-medium" htmlFor={`bid-${community.id}`}>Your bid</label><Input id={`bid-${community.id}`} inputMode="numeric" defaultValue={minimum.toLocaleString("en-US")} className="h-11 bg-card text-base tabular-nums" /></div>
        <p className="px-6 text-xs leading-relaxed text-muted-foreground">Your bid will move your community above the current position if it exceeds the required amount.</p>
        <DialogFooter className="border-t border-border p-6"><Button className="w-full">Challenge position</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Movement({ value }: { value: number }) {
  if (value === 0) return <span className="text-muted-foreground">—</span>;
  return <span className={value > 0 ? "text-positive" : "text-negative"}>{value > 0 ? "↑" : "↓"} {Math.abs(value)}</span>;
}

export function Leaderboard() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const shown = useMemo(() => communities.filter((item) => (category === "All" || item.platform === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return (
    <section aria-label="Arena leaderboard">
      <div className="grid gap-2 sm:grid-cols-[1fr_190px_auto]">
        <div className="relative"><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search community, server or link" className="h-10 bg-card pl-9 shadow-none" /></div>
        <Select value={category} onValueChange={(value) => setCategory(value as (typeof categories)[number])}><SelectTrigger className="h-10 bg-card shadow-none"><SelectValue placeholder="Choose category" /></SelectTrigger><SelectContent>{categories.map((item) => <SelectItem key={item} value={item}>{item === "All" ? "All categories" : item}</SelectItem>)}</SelectContent></Select>
        <Button asChild className="h-10"><Link to="/add">Enter the Arena <ArrowRight /></Link></Button>
      </div>

      <div className="mt-3 flex gap-1 overflow-x-auto border-b border-border pb-3" role="tablist" aria-label="Platform filter">
        {categories.map((item) => <Button key={item} onClick={() => setCategory(item)} variant={category === item ? "secondary" : "ghost"} size="sm" role="tab" aria-selected={category === item} className={category === item ? "bg-accent text-accent-foreground" : "text-muted-foreground"}>{item}</Button>)}
      </div>

      <div className="mt-2">
        <div className="hidden grid-cols-[54px_minmax(0,1fr)_100px_150px_84px] gap-4 border-b border-border px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground md:grid">
          <span>Rank</span><span>Community</span><span>Traffic</span><span className="text-right">Current bid</span><span></span>
        </div>
        {shown.map((community) => (
          <article key={community.id} className={`group relative border-b border-border px-2 py-4 transition-colors hover:bg-card md:grid md:grid-cols-[54px_minmax(0,1fr)_100px_150px_84px] md:items-center md:gap-4 md:px-3 ${community.rank === 1 ? "border-l-2 border-l-primary bg-accent/35" : ""}`}>
            <div className="absolute right-2 top-4 font-display text-sm font-semibold text-muted-foreground md:static md:text-base">#{String(community.rank).padStart(2, "0")}</div>
            <div className="flex min-w-0 gap-3 pr-12 md:pr-0">
              <div className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-secondary font-display text-xs font-bold">{community.initials}</div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2"><Link to="/community/$id" params={{ id: community.id }} className="font-display text-[15px] font-semibold hover:text-primary">{community.name}</Link><Badge variant="outline" className="h-5 px-1.5 font-normal text-muted-foreground">{community.platform}</Badge></div>
                <p className="mt-1 truncate text-xs text-muted-foreground">{community.description}</p>
                <p className="mt-2 text-[11px] text-muted-foreground md:hidden">{community.members} · {formatCompact(community.clicks)} clicks</p>
              </div>
            </div>
            <div className="hidden text-xs text-muted-foreground md:block"><p>{formatCompact(community.clicks)}</p><p className="mt-0.5 text-[10px]">clicks</p></div>
            <div className="mt-4 flex items-end justify-between md:mt-0 md:block md:text-right"><div><p className="font-display text-sm font-semibold tabular-nums text-primary">{formatUzs(community.bid)}</p><p className="mt-0.5 text-[11px] font-medium tabular-nums"><Movement value={community.movement} /> <span className="text-muted-foreground">today</span></p></div><div className="md:hidden"><ChallengeDialog community={community} /></div></div>
            <div className="hidden justify-self-end md:block"><ChallengeDialog community={community} /></div>
          </article>
        ))}
        {shown.length === 0 && <p className="py-14 text-center text-sm text-muted-foreground">No communities match your search.</p>}
      </div>
    </section>
  );
}