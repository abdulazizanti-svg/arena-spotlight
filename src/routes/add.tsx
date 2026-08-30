import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Globe, ImagePlus, Link2, MessageCircle, Send, Trophy, Upload, Users, X } from "lucide-react";
import { PageShell } from "@/components/arrena-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { detectLinkKind, formatUzs, linkKindLabel, normalizeLink, type LinkKind } from "@/lib/arrena-data";

export const Route = createFileRoute("/add")({ head: () => ({ meta: [{ title: "Hamjamiyatni qo‘shish — ARRENA" }, { name: "description", content: "Hamjamiyatingizni havola va logotipi bilan ARRENA reytingiga qo‘shing." }, { property: "og:title", content: "Hamjamiyatni qo‘shish — ARRENA" }, { property: "og:description", content: "Havola, logotip va boshlang‘ich taklif bilan Arenaga kiring." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: AddPage });

const steps = ["Platformani tanlang", "Hamjamiyat ma’lumotlari", "Havola va logotip", "Boshlang‘ich taklif", "Ko‘rib chiqish"] as const;
const platforms = ["Minecraft", "CS2", "Discord", "Telegram"] as const;
const kindIcon: Record<LinkKind, typeof Globe> = { "telegram-channel": Send, "telegram-group": Users, discord: MessageCircle, minecraft: Link2, website: Globe };

function LinkPreview({ link, name, logo }: { link: string; name: string; logo: string | null }) {
  const kind = detectLinkKind(link);
  const Icon = kindIcon[kind];
  const clean = normalizeLink(link);
  const host = clean.split("/")[0];
  return (
    <div className="animate-reveal mt-4 overflow-hidden rounded-[22px] border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/60 px-4 py-2 text-[11px] text-muted-foreground">
        <span className="flex gap-1"><span className="size-2 rounded-full bg-negative/60" /><span className="size-2 rounded-full bg-primary/50" /><span className="size-2 rounded-full bg-positive/60" /></span>
        <span className="ml-1 truncate">{clean || "havola"}</span>
        <Badge variant="outline" className="ml-auto shrink-0 gap-1 font-normal"><Icon className="size-3 text-primary" />{linkKindLabel[kind]}</Badge>
      </div>
      <div className="flex items-center gap-3 p-4">
        {logo
          ? <img src={logo} alt="" className="size-12 shrink-0 rounded-xl object-cover ring-1 ring-border" />
          : <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-accent-foreground">{(name || "AR").slice(0, 2).toUpperCase()}</span>}
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold">{name || "Hamjamiyat nomi"}</p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{host || "havolani kiriting"}</p>
        </div>
        <span className="ml-auto hidden shrink-0 items-center gap-1 text-[11px] text-positive sm:flex"><Check className="size-3.5" />Aniqlandi</span>
      </div>
    </div>
  );
}

function AddPage() {
  const [step, setStep] = useState(0);
  const [platform, setPlatform] = useState<(typeof platforms)[number]>("Minecraft");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [logo, setLogo] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const bid = 300000;
  const kind = useMemo(() => detectLinkKind(link), [link]);

  useEffect(() => () => { if (logo) URL.revokeObjectURL(logo); }, [logo]);

  const pickLogo = (file?: File | null) => { if (!file) return; setLogo(URL.createObjectURL(file)); };
  const KindIcon = kindIcon[kind];

  return (
    <PageShell>
      <div className="mx-auto min-h-[75vh] max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary"><Trophy className="size-3.5" />Arenaga qo‘shilish</p>
          <span className="text-xs tabular-nums text-muted-foreground">0{step + 1} / 05</span>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
        <h1 className="mt-8 font-display text-2xl font-semibold sm:text-3xl">{steps[step]}</h1>

        <div className="mt-7 min-h-72">
          {step === 0 && (
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((item) => <Button key={item} variant={platform === item ? "default" : "outline"} className="h-16 rounded-2xl text-sm" onClick={() => setPlatform(item)}>{item}</Button>)}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div><label className="mb-2 block text-sm font-medium" htmlFor="name">Nomi</label><Input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Minecraft Uzbekistan" /></div>
              <div><label className="mb-2 block text-sm font-medium" htmlFor="desc">Tavsif</label><Textarea id="desc" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Hamjamiyatingiz nimasi bilan ajralib turadi?" /></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="link">Havola yoki server IP</label>
                <div className="relative">
                  <KindIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="link" value={link} onChange={(event) => setLink(event.target.value)} placeholder="t.me/hamjamiyat yoki play.server.uz" className="pl-10" />
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><Link2 className="size-3" />Havola turi avtomatik aniqlanadi: {linkKindLabel[kind]}</p>
                {link.trim().length > 2 && <LinkPreview link={link} name={name} logo={logo} />}
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Logotip</p>
                <div className="flex items-center gap-4 rounded-[22px] border border-dashed border-border bg-card/60 p-4 transition-colors hover:border-primary/40">
                  {logo
                    ? <img src={logo} alt="Yuklangan logotip" className="size-16 rounded-2xl object-cover ring-1 ring-border" />
                    : <span className="grid size-16 place-items-center rounded-2xl bg-secondary text-muted-foreground"><ImagePlus className="size-6" /></span>}
                  <div className="min-w-0">
                    <p className="text-sm">PNG yoki JPG, kvadrat shaklda eng yaxshi ko‘rinadi.</p>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()}><Upload /> Yuklash</Button>
                      {logo && <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={() => setLogo(null)}><X /> O‘chirish</Button>}
                    </div>
                  </div>
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(event) => pickLogo(event.target.files?.[0])} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="bid">Boshlang‘ich taklif</label>
              <Input id="bid" defaultValue={formatUzs(bid)} className="h-12 text-lg tabular-nums" />
              <p className="mt-3 text-xs text-muted-foreground">Minimal kirish taklifi — {formatUzs(bid)}.</p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <LinkPreview link={link || "arrena.uz"} name={name} logo={logo} />
              <div className="flex items-center justify-between rounded-[22px] bg-secondary px-4 py-3 text-sm">
                <span className="flex items-center gap-2"><Badge variant="outline">{platform}</Badge><span className="text-muted-foreground">{linkKindLabel[kind]}</span></span>
                <span className="text-right"><span className="block font-display font-semibold text-primary tabular-nums">{formatUzs(bid)}</span><span className="text-[11px] text-muted-foreground">Taxminiy #24</span></span>
              </div>
              <p className="text-sm text-muted-foreground">{description || "Hamjamiyatingiz boshlang‘ich taklif bo‘yicha eng yuqori mavjud o‘rindan Arenaga kiradi."}</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-between gap-3">
          <Button variant="ghost" disabled={step === 0} onClick={() => setStep((value) => value - 1)}><ArrowLeft /> Orqaga</Button>
          <Button onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))} disabled={step === steps.length - 1 && false}>{step === steps.length - 1 ? <><Trophy /> Arenaga kirish</> : <>Davom etish <ArrowRight /></>}</Button>
        </div>
      </div>
    </PageShell>
  );
}
