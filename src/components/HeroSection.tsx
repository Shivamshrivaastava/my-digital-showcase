import MyPic from "@/assets/MyPic.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-radial-gradient" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-radial-gradient opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Full Stack</span>
              <br />
              <span className="gradient-text">Web Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Dynamic Full Stack Web Developer specializing in the MERN stack,
              adept in creating scalable web applications while leveraging
              strong problem-solving and collaboration skills. Committed to
              enhancing development workflows and maintaining software
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 glow"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg border border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-all hover:border-primary"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              
              {/* Image container with gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-primary to-accent animate-float">
                <img
                  src={MyPic}
                  alt="Shivam Shrivastava"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
