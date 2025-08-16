import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-lg border border-primary/30 shadow-glow" />
        <div className="floating-element absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full border border-secondary/30 shadow-glow-secondary" />
        <div className="floating-element absolute bottom-40 left-1/4 w-20 h-20 bg-accent/20 rounded-xl border border-accent/30" />
        <div className="floating-element absolute bottom-20 right-1/3 w-8 h-8 bg-primary/30 rounded-full" />
        <div className="floating-element absolute top-1/3 left-1/2 w-6 h-6 bg-secondary/40 rounded-lg transform -translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent text-glow">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creative Developer & Digital Artist
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technology. 
            Specializing in interactive web development, 3D visualizations, and creative coding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-4"
            >
              View My Work
            </Button>
            <Button 
              variant="cosmic" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;