import { Github, ExternalLink } from "lucide-react";
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
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Movix",
    description:
      "A movie browsing platform using React featuring category-based search and detailed movie info with a clean, responsive interface.",
    image: movixLogo,
    github: "https://github.com/Shivamshrivaastava/Movix",
    demo: "https://modernmoviemovix.netlify.app/",
    tags: ["React", "API Integration", "SCSS"],
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
      className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
        
        {/* Floating Tech Stack on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-primary border border-primary/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <Github size={20} className="group-hover/link:scale-110 transition-transform" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
          >
            <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform" />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-gradient opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development skills with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
