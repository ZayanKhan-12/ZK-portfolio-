import { Button } from '@/components/ui/button';
import CyberScene3D from '@/components/CyberScene3D';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Matrix Rain Effect */}
      <div className="matrix-overlay opacity-60" />
      
      {/* Scan Lines */}
      <div className="scan-lines absolute inset-0 opacity-70" />
      
      {/* 3D Scene Background */}
      <CyberScene3D />
      
      {/* Background Image with Enhanced Brightness */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Enhanced Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-3d absolute top-20 left-10 w-16 h-16 bg-gradient-holographic rounded-lg border border-primary/30 neon-glow" />
        <div className="floating-3d absolute top-40 right-20 w-12 h-12 bg-gradient-cyber rounded-full border border-neon-pink/30 shadow-hologram" />
        <div className="floating-3d absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-neon rounded-xl border border-accent/30 data-stream" />
        <div className="floating-3d absolute bottom-20 right-1/3 w-8 h-8 bg-primary/50 rounded-full animate-neon-pulse" />
        <div className="floating-3d absolute top-1/3 left-1/2 w-6 h-6 bg-neon-green/60 rounded-lg transform -translate-x-1/2" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          {/* Interactive 4D Name will be rendered in the 3D scene */}
          <div className="mb-6 h-24" /> {/* Spacer for 3D text */}
          <p className="text-xl md:text-2xl text-primary mb-8 max-w-2xl mx-auto neon-glow brightness-125">
            FULL-STACK ARCHITECT & CODE VISIONARY
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed brightness-110">
            Engineering next-generation solutions with cutting-edge technologies. 
            Specializing in scalable architectures, automation tools, and developer experience innovations that push the boundaries of what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-4"
            >
              VIEW PROJECTS
            </Button>
            <Button 
              variant="cyber" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://github.com/ZayanKhan-12', '_blank')}
            >
              GITHUB REPOSITORY
            </Button>
          </div>
        </div>
      </div>

      {/* Cyber Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center neon-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-data-flow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;