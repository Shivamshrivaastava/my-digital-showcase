import MyPic from "@/assets/MyPic.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 md:py-0 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-radial-gradient" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-radial-accent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <p className="text-primary font-semibold mb-2 text-sm tracking-wider uppercase animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Full Stack</span>
              <br />
              <span className="gradient-text">Web Developer</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Specializing in the MERN stack, I build scalable web applications
              with clean code and intuitive user experiences. Passionate about
              solving complex problems and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] glow text-sm"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg border-2 border-border text-foreground font-semibold hover:bg-secondary/50 hover:border-primary/40 transition-all text-sm"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 rounded-full blur-3xl animate-pulse-slow" />

              {/* Image container with gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-primary via-blue-400 to-accent animate-float">
                <img
                  src={MyPic}
                  alt="Shivam Shrivastava"
                  className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full bg-card"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full animate-pulse opacity-80" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse opacity-80" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
