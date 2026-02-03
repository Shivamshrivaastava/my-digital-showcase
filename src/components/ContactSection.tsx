import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Shivamshrivaastava",
    hoverColor: "hover:border-foreground/30 hover:text-foreground",
    iconHover: "group-hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/",
    hoverColor: "hover:border-[#0A66C2]/30 hover:text-[#0A66C2]",
    iconHover: "group-hover:text-[#0A66C2]",
  },
  {
    icon: Mail,
    label: "Email",
    subtext: "shivamshrivaastava@gmail.com",
    href: "mailto:shivamshrivaastava@gmail.com",
    hoverColor: "hover:border-red-400/30 hover:text-red-400",
    iconHover: "group-hover:text-red-400",
  },
  {
    icon: Phone,
    label: "Phone",
    subtext: "+91 9589460598",
    href: "tel:+919589460598",
    hoverColor: "hover:border-emerald-400/30 hover:text-emerald-400",
    iconHover: "group-hover:text-emerald-400",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="section-heading">Connect</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group glass rounded-xl lg:rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.hoverColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary/60 mb-3 sm:mb-4 transition-colors group-hover:bg-secondary">
                  <Icon size={22} className={`sm:w-[26px] sm:h-[26px] text-muted-foreground transition-colors ${link.iconHover}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm sm:text-base mb-1 flex items-center justify-center gap-1">
                  {link.label}
                  <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                {link.subtext && (
                  <p className="text-[10px] sm:text-xs text-muted-foreground break-all">
                    {link.subtext}
                  </p>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
