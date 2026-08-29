import { createFileRoute } from "@tanstack/react-router";
import { Activity, Sparkles } from "lucide-react";
import { Footer, Header } from "@/components/arrena-shell";
import { Leaderboard } from "@/components/leaderboard";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ARRENA — Hamjamiyatlar reytingi" },
    { name: "description", content: "O‘zbekistonning yetakchi Minecraft, CS2, Discord va Telegram hamjamiyatlarini kashf eting." },
    { property: "og:title", content: "ARRENA — Hamjamiyatlar reytingi" },
    { property: "og:description", content: "Hamjamiyatlar uchun jonli va shaffof reyting maydoni." },
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
          <a href="#reyting" className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-positive opacity-40" /><span className="relative inline-flex size-2 rounded-full bg-positive" /></span>12 kishi onlayn <span className="text-border">•</span> 8 421 hamjamiyat <Activity className="size-3.5" /></a>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance text-2xl font-semibold sm:text-3xl">Hamjamiyatlar e’tibor uchun bellashadigan ochiq maydon</h1>
          <p className="mx-auto mt-2 max-w-xl text-pretty text-sm leading-6 text-muted-foreground">Minecraft, CS2, Discord va Telegram hamjamiyatlarini toping, solishtiring va o‘z o‘rningizni egallang.</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"><Sparkles className="size-3.5" />Hamjamiyatingiz yaxshiroq o‘ringa loyiq.</p>
          <div className="mt-7">
            <p className="text-[10px] font-semibold uppercase text-muted-foreground">TOP-1 narxi</p>
            <p className="mt-1 font-display text-4xl font-semibold tabular-nums text-primary sm:text-5xl">2,85 mln UZS</p>
            <p className="mt-2 text-xs text-muted-foreground">Boshlanishi 300 000 UZS · yuqori o‘rin uchun kattaroq taklif kerak.</p>
          </div>
        </div>
        <div id="reyting" className="mt-8 scroll-mt-20 animate-reveal"><Leaderboard /></div>
      </main>
      <Footer />
    </div>
  );
}
