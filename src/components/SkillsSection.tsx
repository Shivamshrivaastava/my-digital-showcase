const SkillsSection = () => {
  const technicalSkills = [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Node.js", "Express", "MongoDB", "JWT", "Git", "GitHub", "Postman", "Tailwind CSS"
  ];
  const softSkills = ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management"];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="section-heading">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technical expertise and soft skills that enable me to build exceptional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="glass rounded-2xl p-8 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Technical Skills
                </h3>
                <p className="text-muted-foreground text-sm">Languages, frameworks & tools</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium text-sm hover:bg-primary/15 hover:border-primary/30 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass rounded-2xl p-8 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Soft Skills
                </h3>
                <p className="text-muted-foreground text-sm">Collaboration & leadership</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg font-medium text-sm hover:bg-accent/15 hover:border-accent/30 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
