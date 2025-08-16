import { Button } from '@/components/ui/button';
import CyberScene3D from '@/components/CyberScene3D';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 -z-10">
        <CyberScene3D />
      </div>
      
      {/* Protective Overlay for Text Readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
      </div>
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent via-transparent to-black/40" />

      {/* Hero Content - Safe Area Above Canvas */}
      <div className="relative z-20 container mx-auto max-w-4xl text-center pt-28 lg:pt-36 px-6">
        {/* Glass Backdrop Container */}
        <div className="backdrop-blur-xl bg-white/10 dark:bg-white/8 rounded-3xl px-8 py-10 shadow-2xl ring-1 ring-white/20">
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-sky-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Zayan Khan
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineering next-gen systems — scalable backends, automation, and DevEx tooling.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <button
              onClick={scrollToProjects}
              className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:brightness-110 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 shadow-lg"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-fuchsia-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-200" />
            </button>
            
            {/* Secondary CTA */}
            <button
              onClick={() => window.open('https://github.com/ZayanKhan-12', '_blank')}
              className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-white/15 bg-white/10 ring-1 ring-white/30 backdrop-blur-sm"
            >
              <span className="relative z-10">GitHub Repository</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="relative">
          <div className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-2 h-4 bg-gradient-to-b from-sky-400 to-fuchsia-400 rounded-full mt-3 animate-pulse" />
          </div>
          <div className="absolute -inset-2 bg-white/10 blur-lg rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;