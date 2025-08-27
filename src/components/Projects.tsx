import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import weapVideo from "@/assets/weap.mp4";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DEVSHARE",
      description:
        "Advanced peer-to-peer file transfer CLI with military-grade encryption. Revolutionizing secure data sharing with quantum-resistant protocols and seamless integration.",
      image: project1,
      tags: ["Python", "Encryption", "P2P", "CLI"],
      demoUrl: "https://pypi.org/project/devshare/",
      githubUrl: "https://github.com/ZayanKhan-12",
    },
    {
      id: 2,
      title: "ONECLICKSETUP",
      description:
        "Revolutionary environment automation engine. One command deploys entire development ecosystems with AI-powered dependency resolution and configuration optimization.",
      image: project2,
      tags: ["DevOps", "Automation", "Python", "CLI"],
      demoUrl: "https://pypi.org/project/oneclicksetup/",
      githubUrl: "https://github.com/ZayanKhan-12",
    },
    {
      id: 3,
      title: "DEVSHARE WEB",
      description:
        "Interactive web platform for DevShare file transfer tool. Real-time file sharing with secure P2P connections, drag-and-drop interface, and encrypted transfers.",
      image: project3,
      tags: ["React", "Web App", "File Transfer", "UI/UX"],
      demoUrl: "https://zayankhan-12.github.io/DevShare/#/",
      githubUrl: "https://github.com/ZayanKhan-12/DevShare",
    },
    {
      id: 4,
      title: "KEYMAPPER",
      description:
        "Advanced keyboard customization tool for power users and developers. Create custom layouts, record macros, and boost productivity with intuitive interface design.",
      image: project4,
      tags: ["JavaScript", "Productivity", "Customization", "UI/UX"],
      demoUrl: "https://zayankhan-12.github.io/MappedKeyss/",
      githubUrl: "https://github.com/ZayanKhan-12/MappedKeyss",
    },
    {
      id: 5,
      title: "CYBERCTRL | NYU HACKATHON",
      description:
        "AI-powered browser extension that proactively prevents developers from using malicious code, packages, and APIs by scanning in real time and providing trust scores and warnings.",
      image: project5,
      tags: [
        "FastAPI",
        "JavaScript",
        "Browser Extension",
        "Security",
        "DevSecOps",
      ],
      demoUrl: "https://www.youtube.com/watch?v=krJquvXj3w8",
      githubUrl: "https://github.com/ZayanKhan-12/Cyberctrl-backend",
    },
    {
      id: 6,
      title: "WEAP Website | Backend",
      description:
        "Backend system powering the Western Engineering Autopilot Club's website. Handles user data, authentication, and content management with a scalable API design.",
      image: project6,
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Backend Development",
      ],
      demoUrl: "https://github.com/ZayanKhan-12/WEAP_website",
      demoVideo: weapVideo,
      githubUrl: "https://github.com/ZayanKhan-12/WEAP_website",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold holographic mb-8 tracking-tight">
              PROJECT ARCHIVES
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8 rounded-full" />
          </div>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Innovative solutions engineered with cutting-edge technologies and
            forward-thinking architecture.
          </p>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Card with 3D Effect */}
              <div className="relative h-full p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 hover:from-primary/30 hover:to-primary/20 transition-all duration-500">
                <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  {/* Project Image with Enhanced Effects */}
                  <div className="relative overflow-hidden h-64 lg:h-72">
                    <img
                      src={project.image}
                      alt={`${project.title} - Innovative technology project`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Multi-layer Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-40 transition-all duration-500" />

                    {/* Floating Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Button
                        variant="cyber"
                        size="lg"
                        className="shadow-2xl hover:scale-110 transition-transform duration-300"
                        onClick={() => {
                          if (project.demoVideo) {
                            window.open(project.demoVideo, "_blank");
                          } else if (project.demoUrl) {
                            window.open(project.demoUrl, "_blank");
                          }
                        }}
                      >
                        {project.demoVideo ? "WATCH DEMO" : "VIEW PROJECT"}
                      </Button>
                      <Button
                        variant="holographic"
                        size="lg"
                        className="shadow-2xl hover:scale-110 transition-transform duration-300"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          SOURCE
                        </a>
                      </Button>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors duration-500" />
                  </div>

                  {/* Enhanced Content Area */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-500 neon-glow">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full hover:border-primary/50 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 neon-glow-subtle animate-fade-in"
                          style={{
                            animationDelay: `${
                              index * 0.15 + tagIndex * 0.05
                            }s`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        variant="cyber"
                        className="flex-1 hover:scale-105 transition-transform duration-300"
                        onClick={() => {
                          if (project.demoVideo) {
                            window.open(project.demoVideo, "_blank");
                          } else if (project.demoUrl) {
                            window.open(project.demoUrl, "_blank");
                          }
                        }}
                      >
                        {project.demoVideo ? "WATCH DEMO" : "LAUNCH PROJECT"}
                      </Button>
                      <Button
                        variant="holographic"
                        size="default"
                        className="hover:scale-105 transition-transform duration-300"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="relative inline-block">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-12 py-6 hover:scale-105 transition-all duration-500 shadow-2xl"
              onClick={() =>
                window.open("https://github.com/ZayanKhan-12", "_blank")
              }
            >
              EXPLORE ALL REPOSITORIES
            </Button>
            <div className="absolute -inset-1 bg-gradient-cyber rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </div>
          <p className="text-muted-foreground mt-6 text-lg">
            Discover more innovative projects and cutting-edge solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;