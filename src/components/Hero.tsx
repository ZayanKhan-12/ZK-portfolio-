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
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Stable Matrix Effect */}
      <div className="matrix-overlay opacity-40" />
      
      {/* Enhanced 3D Scene */}
      <CyberScene3D />
      
      {/* Interactive Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,0,0.1),transparent_50%)]" />
      </div>
      
      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-3d absolute top-20 left-10 w-20 h-20 bg-gradient-cyber rounded-xl border border-primary/40 shadow-neon animate-float" />
        <div className="floating-3d absolute top-40 right-20 w-16 h-16 bg-gradient-holographic rounded-full border border-accent/40 shadow-hologram animate-pulse-glow" />
        <div className="floating-3d absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-neon rounded-2xl border border-neon-pink/40 animate-spin-slow" />
        <div className="floating-3d absolute bottom-20 right-1/3 w-12 h-12 bg-primary/60 rounded-xl animate-bounce" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          {/* Name is now rendered in 3D scene */}
          <div className="mb-8 h-32" />
          
          {/* Enhanced Subtitle */}
          <div className="relative mb-8">
            <p className="text-2xl md:text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4 tracking-wide">
              FULL-STACK ARCHITECT & CODE VISIONARY
            </p>
            <div className="absolute -inset-2 bg-gradient-cyber opacity-20 blur-lg rounded-lg" />
          </div>
          
          {/* Enhanced Description */}
          <div className="relative mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Engineering next-generation solutions with cutting-edge technologies. 
              Specializing in scalable architectures, automation tools, and developer experience innovations that push the boundaries of what's possible.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg" />
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="relative group">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToProjects}
                className="text-xl px-10 py-6 relative overflow-hidden"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Button>
              <div className="absolute -inset-1 bg-gradient-cyber opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300 rounded-lg" />
            </div>
            
            <div className="relative group">
              <Button 
                variant="cyber" 
                size="lg"
                className="text-xl px-10 py-6 relative overflow-hidden"
                onClick={() => window.open('https://github.com/ZayanKhan-12', '_blank')}
              >
                <span className="relative z-10">GITHUB REPOSITORY</span>
                <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Button>
              <div className="absolute -inset-1 bg-gradient-neon opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-14 border-2 border-primary rounded-full flex justify-center shadow-neon">
            <div className="w-2 h-4 bg-primary rounded-full mt-3 animate-data-flow" />
          </div>
          <div className="absolute -inset-2 bg-primary/20 blur-lg rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;