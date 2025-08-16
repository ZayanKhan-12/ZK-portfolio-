const About = () => {

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

        <div className="max-w-4xl mx-auto text-center">
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

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;