const VideoSection = () => {
  return (
    <section className="relative bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See Overclock in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how easy it is to delegate your marketing busywork to AI agents
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-elegant border border-border/20">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wQr27857gy8?si=zf2uos9KeE1vtgw1&rel=0&modestbranding=1"
              title="Overclock Demo - Delegate Marketing Busywork to AI"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;