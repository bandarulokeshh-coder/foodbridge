const stories = [
  {
    quote:
      "We used to scrape the trays into the bin at closing and feel awful about it. Now I list them at nine, and by half past someone is on their way.",
    name: "Meera",
    role: "Restaurant owner",
    initial: "M",
    panel: "bg-marigold md:mt-0",
    avatar: "bg-ink text-marigold",
  },
  {
    quote:
      "I don’t need a miracle, I need to know by four o’clock what’s arriving so I can plan dinner. A list with quantities and a time does exactly that.",
    name: "Rahul",
    role: "Community kitchen coordinator",
    initial: "R",
    panel: "bg-ink text-paper md:mt-14",
    avatar: "bg-marigold text-ink",
  },
  {
    quote:
      "It’s a twenty-minute ride on my way home. I pick up, I drop off, and I get to see the dinner line form. Best part of my evening.",
    name: "Imran",
    role: "Volunteer rider",
    initial: "I",
    panel: "bg-white md:mt-28",
    avatar: "bg-chili text-white",
  },
];

export default function Stories() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="py-16 md:py-24">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="inline-block border-[3px] border-ink bg-tint px-3 py-1 font-display text-base font-bold">
            Illustrative stories
          </p>
          <h2 id="stories-title" className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Three people, one shared dinner.
          </h2>
          <p className="mt-4 max-w-xl text-xl">
            These voices are imagined to show how FoodBridge could feel on the ground.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 md:pb-28 lg:gap-10">
          {stories.map((s) => (
            <figure
              key={s.name}
              className={`flex flex-col border-4 border-ink p-6 shadow-hard sm:p-7 ${s.panel}`}
            >
              <blockquote className="text-xl leading-relaxed">
                <p>“{s.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-ink font-display text-xl font-extrabold ${s.avatar}`}
                >
                  {s.initial}
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-lg font-bold">{s.name}</span>
                  <span className="block text-base opacity-90">{s.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
