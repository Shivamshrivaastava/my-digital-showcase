import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="gradient-text font-medium">Shivam Shrivastava</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Shivamshrivaastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:shivamshrivaastava@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
