import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1z24BtO62IKWmyk1sWw5eNqnDvNIfdV89/view?usp=sharing",
      "_blank"
    );
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/uc?export=download&id=1zL4Mt6FLHUPrgm9euOJ_OeLF7Y3zGYpL";
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            Shivam Shrivastava
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FileDown size={18} />
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 glass border-t border-border/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              handleResumeClick(e);
              setIsMenuOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
          >
            <FileDown size={18} />
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
