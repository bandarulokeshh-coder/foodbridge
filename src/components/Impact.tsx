import CountStat from "./CountStat";

const weekly = [400, 750, 1100, 1500, 1900, 2300, 2700, 3000];
const MAX = 3000;

const label = (n: number) => (n >= 1000 ? `${n / 1000}k` : `0.${Math.round(n / 100)}k`);

export default function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      data-dark
      data-dark-green
      className="border-y-4 border-ink bg-leaf py-16 text-paper md:py-24"
    >
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="inline-block border-[3px] border-ink bg-paper px-3 py-1 font-display text-base font-bold text-ink shadow-hard-sm">
            Pilot targets, not results
          </p>
          <h2 id="impact-title" className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
            What we’re aiming for in our first pilot city.
          </h2>
          <p className="mt-4 max-w-xl text-xl leading-relaxed">
            FoodBridge is a concept. These are the goals we’d hold ourselves to, not meals we’ve
            already moved.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            <CountStat target={12000} label="meals per month" />
            <CountStat target={4800} label="kg kept out of landfill" />
            <CountStat target={85} label="partner NGOs and community kitchens" />
            <CountStat target={45} label="minutes from listing to pickup" />
          </div>

          <figure className="border-4 border-ink bg-paper p-5 text-ink shadow-hard sm:p-6">
            <figcaption>
              <p className="font-display text-xl font-bold leading-tight">
                Weekly meals, first eight weeks
              </p>
              <p className="mt-1 text-base text-ink/80">Pilot target: from about 400 to about 3,000 a week.</p>
            </figcaption>
            <div
              role="img"
              aria-label={`Bar chart of target weekly meals over eight weeks: ${weekly
                .map((v, i) => `week ${i + 1}, ${v.toLocaleString("en-US")}`)
                .join("; ")}.`}
              className="mt-6 flex h-60 items-end gap-1.5 border-b-4 border-ink sm:gap-2.5"
            >
              {weekly.map((v, i) => (
                <div key={v} className="flex h-full flex-1 flex-col items-center justify-end" aria-hidden="true">
                  <span className="mb-1 text-[13px] font-semibold tabular-nums leading-none">{label(v)}</span>
                  <div
                    className={`w-full border-[3px] border-b-0 border-ink ${i === weekly.length - 1 ? "bg-chili" : "bg-leaf"}`}
                    style={{ height: `${(v / MAX) * 82}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-1.5 sm:gap-2.5" aria-hidden="true">
              {weekly.map((v, i) => (
                <span key={v} className="flex-1 text-center text-[13px] text-ink/80">
                  W{i + 1}
                </span>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
