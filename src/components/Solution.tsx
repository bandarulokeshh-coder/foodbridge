const rows = [
  {
    title: "One list.",
    color: "text-chili",
    copy: "Donors post what’s left in about two minutes: what it is, how much, and when it’s ready. No phone tag, no spreadsheets.",
  },
  {
    title: "One match.",
    color: "text-ink",
    copy: "We alert verified NGOs and community kitchens nearby that can use that kind of food. The first to say yes gets it, and everyone else is told it’s taken.",
  },
  {
    title: "One pickup.",
    color: "text-leaf",
    copy: "A volunteer rider or the NGO’s own team collects it, with a simple food-safety checklist. The donor gets a thank-you and a count of meals served.",
  },
];

export default function Solution() {
  return (
    <section id="solution" aria-labelledby="solution-title" className="py-16 md:py-24">
      <div className="wrap">
        <h2 id="solution-title" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          FoodBridge closes the gap in hours, not days.
        </h2>

        <div className="mt-12 border-b-4 border-ink md:mt-16">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid items-baseline gap-3 border-t-4 border-ink py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12 md:py-10"
            >
              <h3 className={`text-5xl sm:text-6xl lg:text-7xl ${row.color}`}>{row.title}</h3>
              <p className="max-w-xl text-xl leading-relaxed">{row.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
