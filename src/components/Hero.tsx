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
      <div className="matrix-overlay" />
      
      {/* Scan Lines */}
      <div className="scan-lines absolute inset-0" />
      
      {/* 3D Scene Background */}
      <CyberScene3D />
      
      {/* Background Image with Holographic Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 holographic">
            COSMIC CREATOR
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-8 max-w-2xl mx-auto neon-glow">
            INTERDIMENSIONAL DESIGNER & DREAM ARCHITECT
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Weaving impossible experiences from stardust and imagination. 
            Crafting ethereal interfaces, cosmic visualizations, and transcendent digital realms that blur the boundaries between dreams and reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-4"
            >
              EXPLORE THE COSMOS
            </Button>
            <Button 
              variant="cyber" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              DOWNLOAD DREAMS
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