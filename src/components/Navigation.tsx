
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Navigation({ className }: { className?: string }) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn("fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm", className)}>
      <div className="container flex h-16 items-center">
        <div className="mr-8 font-semibold">Portfolio</div>
        <div className="flex gap-6">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="hover:bg-transparent hover:text-primary transition-colors"
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
