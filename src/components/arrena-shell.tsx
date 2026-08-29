import { Link } from "@tanstack/react-router";
import { CalendarDays, Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/arrena-logo.png.asset.json";

const navLinks = [
  { label: "Arena", to: "/", icon: null },
  { label: "Bugun", to: "/today", icon: CalendarDays },
  { label: "Qoidalar", to: "/rules", icon: Scale },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-[960px] items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="ARRENA bosh sahifasi"><img src={logoAsset.url} alt="" className="size-8 rounded-lg object-contain" /><span className="font-display text-sm font-bold">ARRENA</span></Link>
        <nav className="ml-auto hidden items-center gap-1 text-[13px] text-muted-foreground md:flex">
          {navLinks.map((link) => { const Icon = link.icon; return <Link key={link.label} to={link.to} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground" activeProps={{ className: "bg-secondary text-foreground" }}>{Icon && <Icon className="size-3.5" />}{link.label}</Link>; })}
        </nav>
        <Sheet>
          <SheetTrigger asChild><Button className="ml-auto md:hidden" variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button></SheetTrigger>
          <SheetContent className="w-[86%] max-w-sm bg-background p-6" side="right">
            <SheetTitle className="flex items-center gap-2.5 font-display text-sm"><img src={logoAsset.url} alt="" className="size-8 rounded-lg object-contain" />ARRENA</SheetTitle>
            <nav className="mt-10 flex flex-col gap-2">
              {navLinks.map((link) => <SheetClose asChild key={link.label}><Link to={link.to} className="rounded-2xl bg-secondary px-4 py-3 text-base">{link.label}</Link></SheetClose>)}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="py-9">
      <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-4 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-foreground"><img src={logoAsset.url} alt="" className="size-6 rounded-md object-contain" />ARRENA</Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/">Arena</Link><Link to="/today">Bugun</Link><Link to="/about">Biz haqimizda</Link><Link to="/how-it-works">Qanday ishlaydi?</Link><Link to="/rules">Qoidalar</Link><Link to="/terms">Shartlar</Link><Link to="/privacy">Maxfiylik</Link>
        </nav>
        <span className="md:ml-auto">© 2026 ARRENA</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}