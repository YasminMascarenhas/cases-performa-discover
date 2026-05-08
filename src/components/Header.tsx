import logo from "@/assets/performa-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-end px-6">
        <a href="#top" className="flex items-center" aria-label="Performa IT">
          <img src={logo} alt="Performa IT" className="h-9 w-auto" />
        </a>
      </div>
    </header>
  );
};
