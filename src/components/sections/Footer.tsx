const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Integrations", href: "#integrations" },
        { name: "Pricing", href: "#pricing" },
        { name: "Documentation", href: "#docs" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" }
      ]
    }
  ];

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-card/40 via-muted/20 to-background border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold gradient-text">OVERCLOCK</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building the future of work with AI that actually works.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Neon Data, Inc. Building the future of work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;