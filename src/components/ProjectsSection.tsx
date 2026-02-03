import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Brainwave from "@/assets/Brainwave.png";
import movixLogo from "@/assets/movix-logo.svg";
import analyticsProject from "@/assets/analytics-project.jpg";
import doctorAppointment from "@/assets/doctor-appointment.jpg";
import referHub from "@/assets/referhub.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Doctor Appointment System",
    description:
      "A full-stack doctor appointment booking system with role-based dashboards for patients, doctors, and admins. Features JWT authentication, appointment scheduling, and prescription management.",
    image: doctorAppointment,
    github: "https://github.com/Shivamshrivaastava/doctor-appointment",
    demo: "https://get-doctor-appointment.netlify.app",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "ReferHub - Candidate Referral",
    description:
      "A full-stack candidate referral management system with resume uploads to Cloudinary, status tracking, search/filter, and metrics dashboard. Built with MERN stack.",
    image: referHub,
    github: "https://github.com/Shivamshrivaastava/candidate-referal--managent-system",
    demo: "https://refercandidates.netlify.app/",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
  },
  {
    title: "Brainwave",
    description:
      "A modern, responsive web application featuring a sleek user interface and seamless user experience using ReactJS and Tailwind CSS.",
    image: Brainwave,
    github: "https://github.com/Shivamshrivaastava/Brainwave",
    demo: "https://brainwaveco.netlify.app/",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Movix",
    description:
      "A movie browsing platform using React featuring category-based search and detailed movie info with a clean, responsive interface.",
    image: movixLogo,
    github: "https://github.com/Shivamshrivaastava/Movix",
    demo: "https://modernmoviemovix.netlify.app/",
    tags: ["React", "TMDB API", "SCSS"],
  },
  {
    title: "Social Media Analytics",
    description:
      "A responsive interface built with HTML5, CSS3, and JavaScript for social media analytics with comprehensive dashboards.",
    image: analyticsProject,
    github: "https://github.com/Shivamshrivaastava/Solar-Stackers_016",
    demo: "https://radiant-crostata-11596d.netlify.app/",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="group glass rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-secondary/80 text-muted-foreground rounded border border-border/50 hover:border-primary/40 hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-5 pt-2 sm:pt-3 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm font-medium group/link"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium group/link"
          >
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Live Demo</span>
            <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-mesh pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="section-heading">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Full-stack applications built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
