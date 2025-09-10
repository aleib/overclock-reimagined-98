import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
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
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
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