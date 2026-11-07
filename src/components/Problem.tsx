export default function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      data-dark
      className="border-b-4 border-ink bg-ink py-16 text-paper md:py-24"
    >
      <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <h2 id="problem-title" className="text-4xl sm:text-5xl lg:text-6xl">
            Food is wasted in one place and missing in another.
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-paper/90">
            The gap is the hours between <em>“we have extra”</em> and <em>“someone can collect it.”</em>{" "}
            Kitchens close, trays go cold, and by the time anyone makes a phone call, the food is
            already in a bin.
          </p>

          {/* The gap, drawn */}
          <figure className="mt-10 max-w-xl" aria-label="Diagram: the gap is the hours between having extra food and someone collecting it">
            <div className="flex items-center" aria-hidden="true">
              <span className="h-5 w-5 shrink-0 rounded-full bg-marigold" />
              <span className="relative mx-1 h-0 flex-1 border-t-4 border-dashed border-marigold">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink px-3 font-display text-lg font-bold text-marigold">
                  hours
                </span>
              </span>
              <span className="h-5 w-5 shrink-0 rounded-full bg-paper" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-6 font-display text-base font-semibold">
              <span>Food is left over</span>
              <span className="text-right">Someone can collect it</span>
            </figcaption>
          </figure>
        </div>

        <div className="space-y-10 lg:pt-6">
          <article className="border-4 border-paper bg-marigold p-6 text-ink shadow-[8px_8px_0_0_#FFFDF5] sm:p-8">
            <p className="font-display text-7xl font-extrabold leading-none sm:text-8xl">1/3</p>
            <p className="mt-4 text-xl leading-snug">
              of all food produced for people is lost or wasted (FAO)
            </p>
          </article>
          <article className="border-4 border-ink bg-paper p-6 text-ink shadow-[8px_8px_0_0_#FFC83D] sm:ml-10 sm:p-8">
            <p className="font-display text-7xl font-extrabold leading-none text-chili sm:text-8xl">733M</p>
            <p className="mt-4 text-xl leading-snug">people faced hunger in 2023 (UN SOFI 2024)</p>
          </article>
        </div>
      </div>
    </section>
  );
}
