import logo from "@/assets/performa-logo-icon.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-end px-6">
        <img src={logo} alt="Performa IT" className="h-8 w-auto" />
      </div>
    </header>
  );
};
