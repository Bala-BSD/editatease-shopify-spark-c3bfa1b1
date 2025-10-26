const AlphabeticalNav = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section id="alphabet" className="py-12 bg-card/30 sticky top-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Browse <span className="bg-gradient-primary bg-clip-text text-transparent">Alphabetically</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter.toLowerCase()}`}
              className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center font-semibold transition-all hover:scale-110"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlphabeticalNav;
