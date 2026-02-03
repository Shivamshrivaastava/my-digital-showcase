import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Shivamshrivaastava",
    color: "group-hover:text-foreground",
    bgColor: "group-hover:bg-foreground/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/",
    color: "group-hover:text-[#0A66C2]",
    bgColor: "group-hover:bg-[#0A66C2]/10",
  },
  {
    icon: Mail,
    label: "Email",
    subtext: "shivamshrivaastava@gmail.com",
    href: "mailto:shivamshrivaastava@gmail.com",
    color: "group-hover:text-[#EA4335]",
    bgColor: "group-hover:bg-[#EA4335]/10",
  },
  {
    icon: Phone,
    label: "Phone",
    subtext: "+91 9589460598",
    href: "tel:+919589460598",
    color: "group-hover:text-skill-soft",
    bgColor: "group-hover:bg-skill-soft/10",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group glass rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 ${link.bgColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4 transition-colors ${link.bgColor}`}>
                  <Icon size={32} className={`text-muted-foreground transition-colors ${link.color}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {link.label}
                </h3>
                {link.subtext && (
                  <p className="text-sm text-muted-foreground break-all">
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
