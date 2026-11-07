"use client";

import { useState, type ChangeEvent } from "react";
import { Carrot, Croissant, Soup, type LucideIcon } from "lucide-react";
import { useAnimatedNumber } from "@/lib/hooks";

type FoodId = "cooked" | "bakery" | "produce";
type Unit = "trays" | "kg";

const FOODS: {
  id: FoodId;
  label: string;
  icon: LucideIcon;
  kgPerTray: number;
  kgPerMeal: number;
}[] = [
  { id: "cooked", label: "Cooked meals", icon: Soup, kgPerTray: 5, kgPerMeal: 0.4 },
  { id: "bakery", label: "Bakery", icon: Croissant, kgPerTray: 2.5, kgPerMeal: 0.15 },
  { id: "produce", label: "Fresh produce", icon: Carrot, kgPerTray: 6, kgPerMeal: 0.3 },
];

const UNITS: { id: Unit; label: string; max: number; start: number }[] = [
  { id: "trays", label: "Trays", max: 40, start: 8 },
  { id: "kg", label: "Kilograms", max: 200, start: 40 },
];

const MEALS_PER_PERSON = 2;

function sentenceFor(meals: number): string {
  if (meals < 15) return "That’s a warm meal for a family around the table.";
  if (meals < 50) return "That’s lunch for a whole community kitchen queue.";
  if (meals < 160) return "That’s dinner for a whole shelter tonight.";
  if (meals < 400) return "That’s dinner for two shelters, with seconds.";
  return "That’s a feast for an entire neighbourhood.";
}

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export default function Calculator() {
  const [food, setFood] = useState<FoodId>("cooked");
  const [unit, setUnit] = useState<Unit>("trays");
  const [qty, setQty] = useState(8);

  const foodInfo = FOODS.find((f) => f.id === food) ?? FOODS[0];
  const unitInfo = UNITS.find((u) => u.id === unit) ?? UNITS[0];

  const kg = unit === "kg" ? qty : qty * foodInfo.kgPerTray;
  const meals = Math.max(1, Math.round(kg / foodInfo.kgPerMeal));
  const people = Math.max(1, Math.round(meals / MEALS_PER_PERSON));
  const sentence = sentenceFor(meals);

  const shownMeals = useAnimatedNumber(meals);
  const shownPeople = useAnimatedNumber(people);
  const shownKg = useAnimatedNumber(Math.round(kg));

  const onUnit = (next: Unit) => {
    setUnit(next);
    setQty(UNITS.find((u) => u.id === next)?.start ?? 1);
  };

  const unitWord = unit === "trays" ? (qty === 1 ? "tray" : "trays") : "kg";

  return (
    <section id="calculator" aria-labelledby="calc-title" className="py-16 md:py-24">
      <div className="wrap">
        <h2 id="calc-title" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          How many meals could your surplus feed?
        </h2>
        <p className="mt-4 max-w-xl text-xl">
          Pick what you have left and slide to how much. The answer updates as you go.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Inputs */}
          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label="Meals calculator inputs"
            className="space-y-8 border-4 border-ink bg-white p-5 shadow-hard sm:p-8"
          >
            <fieldset>
              <legend className="font-display text-lg font-bold">1. What food is it?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {FOODS.map((f) => {
                  const Icon = f.icon;
                  return (
                    <label key={f.id} className="relative block cursor-pointer">
                      <input
                        type="radio"
                        name="food"
                        value={f.id}
                        checked={food === f.id}
                        onChange={() => setFood(f.id)}
                        className="peer sr-only"
                      />
                      <span className="flex min-h-14 items-center gap-2.5 border-[3px] border-ink bg-paper px-3.5 py-2.5 font-display font-bold leading-tight transition-colors peer-checked:bg-marigold peer-checked:shadow-hard-sm peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-ink sm:flex-col sm:items-start sm:gap-2">
                        <Icon size={24} aria-hidden="true" />
                        {f.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="qty" className="font-display text-lg font-bold">
                  2. How much is there?
                </label>
                <output htmlFor="qty" className="font-display text-2xl font-extrabold tabular-nums">
                  {qty} {unitWord}
                </output>
              </div>
              <input
                id="qty"
                type="range"
                min={1}
                max={unitInfo.max}
                step={1}
                value={qty}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQty(Number(e.target.value))}
                aria-valuetext={`${qty} ${unitWord}`}
                className="range mt-2"
              />
              <div className="flex justify-between text-base text-ink/75" aria-hidden="true">
                <span>1</span>
                <span>{unitInfo.max}</span>
              </div>
            </div>

            <fieldset>
              <legend className="font-display text-lg font-bold">3. Measured in</legend>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {UNITS.map((u) => (
                  <label key={u.id} className="relative block cursor-pointer">
                    <input
                      type="radio"
                      name="unit"
                      value={u.id}
                      checked={unit === u.id}
                      onChange={() => onUnit(u.id)}
                      className="peer sr-only"
                    />
                    <span className="flex min-h-12 items-center justify-center border-[3px] border-ink bg-paper px-3 py-2 font-display font-bold transition-colors peer-checked:bg-marigold peer-checked:shadow-hard-sm peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-ink">
                      {u.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>

          {/* Result */}
          <div
            data-dark
            className="flex flex-col justify-between border-4 border-ink bg-ink p-6 text-paper shadow-[8px_8px_0_0_#C81E36] sm:p-8"
          >
            <div>
              <p className="font-display text-lg font-bold">Meals rescued</p>
              <p
                className="font-display text-[5.5rem] font-extrabold leading-none tabular-nums text-marigold sm:text-[8rem]"
                aria-hidden="true"
              >
                {fmt(shownMeals)}
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t-4 border-paper/25 pt-6" aria-hidden="true">
              <div>
                <dt className="text-base text-paper/80">People fed</dt>
                <dd className="font-display text-4xl font-extrabold tabular-nums sm:text-5xl">
                  {fmt(shownPeople)}
                </dd>
              </div>
              <div>
                <dt className="text-base text-paper/80">Kg kept out of landfill</dt>
                <dd className="font-display text-4xl font-extrabold tabular-nums sm:text-5xl">
                  {fmt(shownKg)}
                </dd>
              </div>
            </dl>

            {/* Screen readers hear the final numbers once, not every animation frame */}
            <p className="sr-only" role="status">
              {`${fmt(meals)} meals rescued, ${fmt(people)} people fed, ${fmt(kg)} kilograms kept out of landfill. ${sentence}`}
            </p>

            <p key={sentence} className="rise-in mt-8 font-display text-2xl font-bold leading-snug">
              {sentence}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-base text-ink/80">
          Estimates based on average portion sizes. People fed assumes about two meals each.
        </p>
      </div>
    </section>
  );
}
