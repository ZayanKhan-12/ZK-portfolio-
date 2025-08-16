const About = () => {
  const skills = [
    { name: 'Python & CLI Development', level: 95 },
    { name: 'React & TypeScript', level: 90 },
    { name: 'DevOps & Automation', level: 88 },
    { name: 'System Architecture', level: 85 },
    { name: 'Security & Encryption', level: 87 },
    { name: 'Package Development', level: 92 },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science student passionate about software development, backend engineering, and computer vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Computer Science student at University of Western Ontario with a passion for software development and backend engineering. 
              Proficient in Java and Python. A member of the Computer Vision team at Western Engineering Autopilot Club, 
              specializing in image augmentations to enhance self-driving car perception.
            </p>
            
            <p className="text-lg leading-relaxed">
              Beyond academics, I actively engage in hackathons and develop innovative projects that tackle real-world challenges. 
              Currently building an open-source GitHub repository to visualize and validate any image dataset annotations 
              for accuracy and preprocessing.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Stack</h3>
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
                2+
              </div>
              <p className="text-muted-foreground">PyPI Packages</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                2+
              </div>
              <p className="text-muted-foreground">Years Engineering</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Open Source Contributions</p>
            </div>
            
            <div className="project-card p-6 text-center group">
              <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Code Quality Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;