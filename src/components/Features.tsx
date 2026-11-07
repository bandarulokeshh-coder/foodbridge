import { Handshake, Route, Users, Utensils } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Food donation",
    copy: "List cooked meals, bakery items or fresh produce in a couple of minutes. Add the quantity and a pickup window, and you’re done.",
  },
  {
    icon: Handshake,
    title: "NGO partnerships",
    copy: "Every NGO and community kitchen is checked before it joins. You always know exactly who is collecting your food.",
  },
  {
    icon: Route,
    title: "Pickup coordination",
    copy: "Matching, routes and reminders are handled for you. Each volunteer sees one clear task with an address and a time.",
  },
  {
    icon: Users,
    title: "Community participation",
    copy: "Neighbours can sign up as riders, sorters or serving hands. Anyone with an hour to spare can help move food.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="border-t-4 border-ink bg-tint py-16 md:py-24"
    >
      <div className="wrap">
        <h2 id="features-title" className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          Built for the people who actually move the food.
        </h2>

        <div className="mt-12 grid gap-x-16 md:mt-16 md:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`border-t-4 border-ink pb-12 pt-6 ${i % 2 === 1 ? "md:mt-16" : ""}`}
              >
                <Icon size={36} strokeWidth={2.25} className="text-chili" aria-hidden="true" />
                <h3 className="mt-4 text-3xl">{f.title}</h3>
                <p className="mt-3 max-w-md text-xl leading-relaxed">{f.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
