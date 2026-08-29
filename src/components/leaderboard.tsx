import { useMemo, useState } from "react";
import { ArrowRight, BarChart3, Crown, Grid2X2, Search, Sparkles, Trophy, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { communities, formatCompact, formatUzs, type Community, type Platform } from "@/lib/arrena-data";

const categories: ("Barchasi" | Platform)[] = ["Barchasi", "Minecraft", "CS2", "Discord", "Telegram"];

function ChallengeDialog({ community }: { community: Community }) {
  const minimum = community.bid + 200000;
  return (
    <Dialog>
      <DialogTrigger asChild><Button size="sm" variant={community.rank <= 3 ? "default" : "outline"}>O‘rnini egallash</Button></DialogTrigger>
      <DialogContent className="max-w-md p-0">
        <DialogHeader className="p-6 pb-2 pr-14">
          <div className="mb-2 grid size-10 place-items-center rounded-full bg-accent text-primary"><Trophy className="size-5" /></div>
          <DialogTitle className="font-display text-xl">#{community.rank} o‘rinni egallash</DialogTitle>
          <DialogDescription>Taklifingizni oshirib, {community.name} hamjamiyatidan yuqoriga ko‘tariling.</DialogDescription>
        </DialogHeader>
        <div className="mx-6 grid grid-cols-2 gap-3 rounded-2xl bg-secondary p-4 text-sm">
          <div><p className="text-xs text-muted-foreground">Joriy taklif</p><p className="mt-1 font-display font-semibold tabular-nums">{formatUzs(community.bid)}</p></div>
          <div><p className="text-xs text-muted-foreground">Minimal taklif</p><p className="mt-1 font-display font-semibold text-primary tabular-nums">{formatUzs(minimum)}</p></div>
        </div>
        <div className="px-6"><label className="mb-2 block text-xs font-medium" htmlFor={`bid-${community.id}`}>Sizning taklifingiz</label><Input id={`bid-${community.id}`} inputMode="numeric" defaultValue={minimum.toLocaleString("uz-UZ")} className="h-11 text-base tabular-nums" /></div>
        <p className="px-6 text-xs leading-relaxed text-muted-foreground">Taklif belgilangan miqdordan yuqori bo‘lsa, hamjamiyatingiz ushbu o‘rindan tepaga chiqadi.</p>
        <DialogFooter className="p-6 pt-2"><Button className="w-full"><Trophy /> O‘rinni egallash</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Movement({ value }: { value: number }) {
  if (value === 0) return <span className="text-muted-foreground">—</span>;
  return <span className={value > 0 ? "text-positive" : "text-negative"}>{value > 0 ? "↑" : "↓"} {Math.abs(value)}</span>;
}

export function Leaderboard() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Barchasi");
  const [query, setQuery] = useState("");
  const shown = useMemo(() => communities.filter((item) => (category === "Barchasi" || item.platform === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const podium = shown.filter((item) => item.rank <= 3);
  const rest = shown.filter((item) => item.rank > 3);
  return (
    <section aria-label="Arena reytingi">
      <div className="grid gap-2 sm:grid-cols-[1fr_190px_auto]">
        <div className="relative"><Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hamjamiyat, server yoki havolani qidiring" className="pl-10" /></div>
        <Select value={category} onValueChange={(value) => setCategory(value as (typeof categories)[number])}><SelectTrigger><span className="flex min-w-0 items-center gap-2"><Grid2X2 className="size-4 shrink-0 text-muted-foreground" /><SelectValue placeholder="Kategoriyani tanlang" /></span></SelectTrigger><SelectContent>{categories.map((item) => <SelectItem key={item} value={item}>{item === "Barchasi" ? "Barcha kategoriyalar" : item}</SelectItem>)}</SelectContent></Select>
        <Button asChild><Link to="/add">Reytingni sindirish <ArrowRight /></Link></Button>
      </div>

      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-2" role="tablist" aria-label="Platforma filtri">
        {categories.map((item) => <Button key={item} onClick={() => setCategory(item)} variant={category === item ? "secondary" : "ghost"} size="sm" role="tab" aria-selected={category === item} className={category === item ? "bg-accent text-accent-foreground" : "text-muted-foreground"}>{item}</Button>)}
      </div>

      <div className="mt-4 space-y-2.5">
        {podium.length > 0 && <div className="mb-3 flex items-center gap-2 px-1 text-[10px] font-semibold uppercase text-muted-foreground"><Crown className="size-3.5 text-primary" />Yetakchilar uchligi</div>}
        {podium.map((community) => (
          <article key={community.id} className="group relative rounded-2xl border border-primary/15 bg-card p-4 shadow-[0_8px_30px_color-mix(in_oklab,var(--primary)_7%,transparent)] transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_36px_color-mix(in_oklab,var(--primary)_10%,transparent)] md:grid md:grid-cols-[62px_minmax(0,1fr)_105px_150px_128px] md:items-center md:gap-4">
            <div className="absolute right-4 top-4 flex items-center gap-1 font-display text-sm font-semibold text-primary md:static md:text-base"><Crown className="size-4" />#{String(community.rank).padStart(2, "0")}</div>
            <div className="flex min-w-0 gap-3 pr-14 md:pr-0"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent font-display text-xs font-bold text-accent-foreground">{community.initials}</div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><Link to="/community/$id" params={{ id: community.id }} className="font-display text-[15px] font-semibold hover:text-primary">{community.name}</Link><Badge variant="outline">{community.platform}</Badge></div><p className="mt-1 truncate text-xs text-muted-foreground">{community.description}</p><p className="mt-2 text-[11px] text-muted-foreground md:hidden">{community.members} · {formatCompact(community.clicks)} bosish</p></div></div>
            <div className="hidden text-xs text-muted-foreground md:block"><p className="flex items-center gap-1.5"><BarChart3 className="size-3.5" />{formatCompact(community.clicks)}</p><p className="mt-0.5 pl-5 text-[10px]">bosishlar</p></div>
            <div className="mt-4 flex items-end justify-between md:mt-0 md:block md:text-right"><div><p className="font-display text-sm font-semibold tabular-nums text-primary">{formatUzs(community.bid)}</p><p className="mt-0.5 text-[11px] font-medium tabular-nums"><Movement value={community.movement} /> <span className="text-muted-foreground">bugun</span></p></div><div className="md:hidden"><ChallengeDialog community={community} /></div></div>
            <div className="hidden justify-self-end md:block"><ChallengeDialog community={community} /></div>
          </article>
        ))}
        {rest.length > 0 && <div className="flex items-center gap-2 px-1 pt-5 text-[10px] font-semibold uppercase text-muted-foreground"><Users className="size-3.5" />Qolgan o‘rinlar</div>}
        <div className="hidden grid-cols-[54px_minmax(0,1fr)_100px_150px_128px] gap-4 px-4 py-1 text-[10px] font-semibold uppercase text-muted-foreground md:grid">
          <span>O‘rin</span><span>Hamjamiyat</span><span>Faollik</span><span className="text-right">Joriy taklif</span><span></span>
        </div>
        {rest.map((community) => (
          <article key={community.id} className="group relative rounded-2xl bg-card/75 px-4 py-4 transition-[background-color,transform] hover:-translate-y-px hover:bg-card md:grid md:grid-cols-[54px_minmax(0,1fr)_100px_150px_128px] md:items-center md:gap-4">
            <div className="absolute right-2 top-4 font-display text-sm font-semibold text-muted-foreground md:static md:text-base">#{String(community.rank).padStart(2, "0")}</div>
            <div className="flex min-w-0 gap-3 pr-12 md:pr-0">
              <div className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-secondary font-display text-xs font-bold">{community.initials}</div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2"><Link to="/community/$id" params={{ id: community.id }} className="font-display text-[15px] font-semibold hover:text-primary">{community.name}</Link><Badge variant="outline" className="h-5 px-1.5 font-normal text-muted-foreground">{community.platform}</Badge></div>
                <p className="mt-1 truncate text-xs text-muted-foreground">{community.description}</p>
                 <p className="mt-2 text-[11px] text-muted-foreground md:hidden">{community.members} · {formatCompact(community.clicks)} bosish</p>
              </div>
            </div>
             <div className="hidden text-xs text-muted-foreground md:block"><p>{formatCompact(community.clicks)}</p><p className="mt-0.5 text-[10px]">bosishlar</p></div>
             <div className="mt-4 flex items-end justify-between md:mt-0 md:block md:text-right"><div><p className="font-display text-sm font-semibold tabular-nums text-primary">{formatUzs(community.bid)}</p><p className="mt-0.5 text-[11px] font-medium tabular-nums"><Movement value={community.movement} /> <span className="text-muted-foreground">bugun</span></p></div><div className="md:hidden"><ChallengeDialog community={community} /></div></div>
            <div className="hidden justify-self-end md:block"><ChallengeDialog community={community} /></div>
          </article>
        ))}
        {shown.length === 0 && <div className="rounded-2xl bg-card py-14 text-center text-sm text-muted-foreground"><Search className="mx-auto mb-3 size-5" />Qidiruvingizga mos hamjamiyat topilmadi.</div>}
      </div>
    </section>
  );
}