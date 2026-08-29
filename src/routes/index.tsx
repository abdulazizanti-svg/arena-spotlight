import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer, Header } from "@/components/arrena-shell";
import { Leaderboard } from "@/components/leaderboard";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ARRENA — Gaming Community Rankings" },
    { name: "description", content: "Discover and challenge Uzbekistan's leading Minecraft, CS2, Discord and Telegram communities." },
    { property: "og:title", content: "ARRENA — Gaming Community Rankings" },
    { property: "og:description", content: "The active ranking marketplace for gaming communities." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[960px] px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <div className="animate-reveal text-center">
          <a href="#leaderboard" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"><span className="size-1.5 rounded-full bg-positive" />12 online · 8,421 communities competing · live statistics <ArrowRight className="size-3" /></a>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-2xl font-semibold sm:text-3xl">ARRENA — gaming communities compete for visibility</h1>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-muted-foreground">The most competitive place to discover Minecraft servers, CS2 communities, Discord servers and Telegram groups.</p>
          <p className="mt-2 text-sm font-medium text-primary">Your community deserves a better position.</p>
          <div className="mt-8">
            <p className="text-[10px] font-semibold uppercase text-muted-foreground">Top-1 uchun</p>
            <p className="mt-1 font-display text-4xl font-semibold tabular-nums text-primary sm:text-5xl">2.85 mln UZS</p>
            <p className="mt-2 text-xs text-muted-foreground">Starting from 300,000 UZS · each position requires a higher bid.</p>
          </div>
        </div>
        <div id="leaderboard" className="mt-8 scroll-mt-20 animate-reveal"><Leaderboard /></div>
      </main>
      <Footer />
    </div>
  );
}
