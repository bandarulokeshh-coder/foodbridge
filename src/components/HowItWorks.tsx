const steps = [
  {
    title: "List what’s left",
    copy: "Tell us what food you have, how much, and when it can be collected.",
    time: "Takes about two minutes",
  },
  {
    title: "An NGO accepts",
    copy: "A verified partner nearby says yes, and you see exactly who is coming.",
    time: "Target: under 15 minutes",
  },
  {
    title: "A volunteer collects",
    copy: "A rider picks it up from your door while the food is still fresh.",
    time: "Target: within 30 minutes",
  },
  {
    title: "Meals are served",
    copy: "The kitchen serves it the same day, and you get a note with the meal count.",
    time: "Same day, still fresh",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="border-y-4 border-ink bg-tint py-16 md:py-24"
    >
      <div className="wrap">
        <h2 id="how-title" className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          How it works
        </h2>
        <p className="mt-4 max-w-xl text-xl">Four steps from a full tray to a served plate.</p>

        <ol className="mt-12 grid gap-x-6 md:mt-16 md:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`relative pb-10 pl-20 last:pb-0 md:pb-0 md:pl-0 md:pt-[4.5rem] ${
                i < steps.length - 1
                  ? "before:absolute before:left-[26px] before:top-14 before:-bottom-0 before:w-1 before:bg-ink md:before:bottom-auto md:before:left-14 md:before:top-[26px] md:before:h-1 md:before:w-[calc(100%-32px)]"
                  : ""
              }`}
            >
              <span
                className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center border-4 border-ink bg-marigold font-display text-2xl font-extrabold shadow-hard-sm"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="text-2xl">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed">{step.copy}</p>
              <p className="mt-3 font-display text-base font-semibold text-chili">{step.time}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
