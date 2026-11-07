import JoinPanel from "./JoinPanel";

export default function CallToAction() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="border-t-4 border-ink bg-marigold py-16 md:py-24"
    >
      <div className="wrap grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <h2 id="join-title" className="text-5xl sm:text-6xl lg:text-7xl">
            There’s food to move tonight. Join in.
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed">
            Choose how you’d like to help. Each form takes about a minute.
          </p>
          <p className="mt-6 inline-block border-[3px] border-ink bg-paper px-3 py-1.5 font-display text-base font-bold">
            This is a design demo, so nothing is submitted.
          </p>
        </div>
        <JoinPanel />
      </div>
    </section>
  );
}
