import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Arena", to: "/" },
  { label: "Today", to: "/today" },
  { label: "Rules", to: "/rules" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[960px] items-center px-4 sm:px-6">
        <Link to="/" className="font-display text-sm font-bold tracking-[0.16em]">ARRENA</Link>
        <nav className="ml-10 hidden items-center gap-6 text-[13px] text-muted-foreground md:flex">
          {navLinks.map((link) => <Link key={link.label} to={link.to} className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>{link.label}</Link>)}
        </nav>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm"><Link to="/login">Sign in</Link></Button>
          <Button asChild size="sm"><Link to="/add">Add Community</Link></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button className="ml-auto md:hidden" variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button></SheetTrigger>
          <SheetContent className="w-[86%] max-w-sm bg-background p-6" side="right">
            <SheetTitle className="font-display text-sm tracking-[0.16em]">ARRENA</SheetTitle>
            <nav className="mt-10 flex flex-col border-t border-border">
              {navLinks.map((link) => <SheetClose asChild key={link.label}><Link to={link.to} className="border-b border-border py-4 text-lg">{link.label}</Link></SheetClose>)}
              <SheetClose asChild><Link to="/add" className="border-b border-border py-4 text-lg">Add Community</Link></SheetClose>
              <SheetClose asChild><Link to="/login" className="border-b border-border py-4 text-lg">Sign in</Link></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-4 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center">
        <Link to="/" className="font-display font-bold tracking-[0.14em] text-foreground">ARRENA</Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/">Arena</Link><Link to="/today">Today</Link><Link to="/add">Add Community</Link><Link to="/about">About</Link><Link to="/how-it-works">How it works</Link><Link to="/rules">Rules</Link><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link>
        </nav>
        <span className="md:ml-auto">© 2026 ARRENA</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}