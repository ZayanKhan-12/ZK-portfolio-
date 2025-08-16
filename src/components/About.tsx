const About = () => {
  const stats = [
    { label: 'University of Western Ontario', value: 'Computer Science' },
    { label: 'Languages', value: 'Java & Python' },
    { label: 'Focus', value: 'Backend Engineering' },
    { label: 'Team', value: 'Computer Vision @ WE Autopilot' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-sora mb-6 bg-gradient-to-r from-sky-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-fuchsia-500/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-lg font-inter leading-relaxed text-white/90">
                Computer Science student at University of Western Ontario with a passion for software 
                development and backend engineering. Proficient in Java and Python, I'm a member of the 
                Computer Vision team at Western Engineering Autopilot Club, specializing in image 
                augmentations to enhance self-driving car perception.
              </p>
              <p className="text-lg font-inter leading-relaxed text-white/90 mt-4">
                Beyond academics, I actively engage in hackathons and develop innovative projects that 
                tackle real-world challenges. Currently building an open-source GitHub repository to 
                visualize and validate any image dataset annotations for accuracy and preprocessing.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-200 hover:scale-105"
              >
                <div className="text-2xl font-bold font-sora bg-gradient-to-r from-sky-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-white/70 font-inter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;