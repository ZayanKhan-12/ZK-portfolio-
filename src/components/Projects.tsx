import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DEVSHARE',
      description: 'Advanced peer-to-peer file transfer CLI with military-grade encryption. Revolutionizing secure data sharing with quantum-resistant protocols and seamless integration.',
      image: project1,
      tags: ['Python', 'Encryption', 'P2P', 'CLI'],
      demoUrl: 'https://pypi.org/project/devshare/',
      githubUrl: 'https://github.com/ZayanKhan-12',
    },
    {
      id: 2,
      title: 'ONECLICKSETUP',
      description: 'Revolutionary environment automation engine. One command deploys entire development ecosystems with AI-powered dependency resolution and configuration optimization.',
      image: project2,
      tags: ['DevOps', 'Automation', 'Python', 'CLI'],
      demoUrl: 'https://pypi.org/project/oneclicksetup/',
      githubUrl: 'https://github.com/ZayanKhan-12',
    },
    {
      id: 3,
      title: 'DEVSHARE WEB',
      description: 'Interactive web platform for DevShare file transfer tool. Real-time file sharing with secure P2P connections, drag-and-drop interface, and encrypted transfers.',
      image: project3,
      tags: ['React', 'Web App', 'File Transfer', 'UI/UX'],
      demoUrl: 'https://zayankhan-12.github.io/DevShare/#/',
      githubUrl: 'https://github.com/ZayanKhan-12/DevShare',
    },
    {
      id: 4,
      title: 'KEYMAPPER',
      description: 'Advanced keyboard customization tool for power users and developers. Create custom layouts, record macros, and boost productivity with intuitive interface design.',
      image: project4,
      tags: ['JavaScript', 'Productivity', 'Customization', 'UI/UX'],
      demoUrl: 'https://zayankhan-12.github.io/MappedKeyss/',
      githubUrl: 'https://github.com/ZayanKhan-12/MappedKeyss',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold holographic mb-6">
            PROJECT ARCHIVES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions engineered with cutting-edge technologies and forward-thinking architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="hologram-card group scan-lines"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Holographic Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="cyber" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      VIEW PACKAGE
                    </a>
                  </Button>
                  <Button variant="holographic" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      SOURCE CODE
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6 data-stream">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary-glow transition-colors neon-glow">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gradient-cyber rounded-full border border-primary/50 hover:border-primary transition-colors neon-glow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Cyber Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="cyber" size="sm" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      VIEW PACKAGE
                    </a>
                  </Button>
                  <Button variant="holographic" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repository Access Portal */}
        <div className="text-center mt-12">
          <Button 
            variant="cyber" 
            size="lg" 
            className="neon-glow"
            onClick={() => window.open('https://github.com/ZayanKhan-12', '_blank')}
          >
            VIEW ALL REPOSITORIES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;