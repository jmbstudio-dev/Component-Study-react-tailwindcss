const creatives = [
  { image: "/creatives/Art1.png", title: "Portrait" },
  { image: "/creatives/Art1.png", title: "Fanart" },
  { image: "/creatives/Art1.png", title: "Commission" },
  { image: "/creatives/Art1.png", title: "Sketch" },
  // Add more items as needed
];

export const Creatives = () => {
  return (
    <section id="creatives" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            No rules.{" "}
            <span className="font-serif italic font-normal text-white">
              Just passion.
            </span>
          </h2>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {creatives.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};