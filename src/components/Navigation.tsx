import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate there first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold gradient-text">OVERCLOCK</span>
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Beta</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign in
            </Button>
            <Button variant="hero" size="sm" className="glow">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;