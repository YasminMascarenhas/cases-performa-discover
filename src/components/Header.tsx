import logo from "@/assets/performa-logo.png";

const links = [
  { label: "Empresas", href: "#empresas" },
  { label: "Katalysis", href: "#katalysis" },
  { label: "Discovery & Design", href: "#discovery" },
  { label: "Agile Development", href: "#agile" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="Performa IT">
          <img src={logo} alt="Performa IT" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
