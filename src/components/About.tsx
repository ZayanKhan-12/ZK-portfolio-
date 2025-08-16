const About = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Three.js & WebGL', level: 88 },
    { name: 'Node.js & APIs', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Creative Coding', level: 92 },
    { name: 'Database Design', level: 80 },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about pushing the boundaries of web development and creating experiences that inspire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a creative developer with a passion for building innovative digital experiences. 
              With expertise in modern web technologies and a keen eye for design, I transform 
              complex ideas into intuitive, engaging interfaces.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or experimenting with creative coding projects that blend 
              art and technology.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-hero rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                3+
              </div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;