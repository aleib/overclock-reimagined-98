const VideoSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          See Overclock in action
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Watch how marketing teams are delegating their busywork to AI and getting hours back every week.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-primary/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wQr27857gy8?si=i8WG45yRN5QQnT53&autoplay=1&mute=1&loop=1&playlist=wQr27857gy8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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