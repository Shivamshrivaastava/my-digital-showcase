import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border/50 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            © {currentYear} <span className="gradient-text font-semibold">Shivam Shrivastava</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://github.com/Shivamshrivaastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a
              href="mailto:shivamshrivaastava@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors p-1"
              aria-label="Email"
            >
              <Mail size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
