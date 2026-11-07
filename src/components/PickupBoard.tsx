"use client";

import { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/hooks";

const STAGES = ["Listed", "NGO accepted", "Picked up", "Served"] as const;

type Donation = {
  donor: string;
  what: string;
  amount: string;
  ngo: string;
  distance: string;
};

const POOL: Donation[] = [
  {
    donor: "Saffron Court Hotel",
    what: "Veg biryani and dal",
    amount: "60 meals",
    ngo: "Annapurna Seva Trust",
    distance: "2.1 km",
  },
  {
    donor: "Green Leaf Bakery",
    what: "Loaves and soft buns",
    amount: "40 loaves",
    ngo: "Sunrise Community Kitchen",
    distance: "0.8 km",
  },
  {
    donor: "Patel wedding, Hall B",
    what: "Pulao, paneer and rotis",
    amount: "25 trays",
    ngo: "Asha Night Shelter",
    distance: "3.4 km",
  },
  {
    donor: "Harbour View Hotel",
    what: "Dal, rice and vegetables",
    amount: "45 meals",
    ngo: "Roti Ghar Kitchen",
    distance: "1.6 km",
  },
  {
    donor: "The Mehra household",
    what: "Birthday lunch leftovers",
    amount: "14 portions",
    ngo: "Seva Ward 4 Kitchen",
    distance: "1.2 km",
  },
  {
    donor: "Fresh Basket Grocers",
    what: "Tomatoes, greens, carrots",
    amount: "30 kg",
    ngo: "Hope Community Kitchen",
    distance: "2.7 km",
  },
];

/** Each slot cycles listed → accepted → picked up → served, then shows a new donation. */
const CYCLE = 5;
const STAGE_BY_PHASE = [0, 1, 2, 3, 3];
const OFFSETS = [3, 1, 2];
const TICK_MS = 2400;

export default function PickupBoard() {
  const reduced = usePrefersReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  const now = reduced ? 0 : tick;
  const slots = OFFSETS.map((offset, i) => {
    const n = now + offset;
    return {
      key: `${i}-${Math.floor(n / CYCLE)}`,
      donation: POOL[(i + 3 * Math.floor(n / CYCLE)) % POOL.length],
      stage: STAGE_BY_PHASE[n % CYCLE],
    };
  });

  return (
    <section
      aria-labelledby="board-title"
      className="border-4 border-ink bg-ink p-5 text-paper shadow-[8px_8px_0_0_#FFFDF5] sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="board-title" className="text-2xl sm:text-3xl">
          Pickups near you
        </h2>
        <p className="flex items-center gap-2 bg-marigold px-2.5 py-1 font-display text-sm font-bold text-ink">
          <span className="live-dot inline-block h-2.5 w-2.5 rounded-full bg-chili" aria-hidden="true" />
          Sample activity
        </p>
      </div>

      <ul className="mt-5 divide-y divide-paper/20" aria-live="off">
        {slots.map(({ key, donation, stage }) => (
          <li key={key} className="rise-in py-4 first:pt-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-lg font-bold leading-tight">{donation.donor}</p>
              <p className="shrink-0 font-display text-lg font-bold text-marigold">{donation.amount}</p>
            </div>
            <p className="mt-1 text-base leading-snug text-paper/85">
              {donation.what} for {donation.ngo}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-paper/75">
              <MapPin size={14} aria-hidden="true" />
              {donation.distance} away
            </p>

            <div
              className="mt-3 grid grid-cols-4 gap-1.5"
              role="progressbar"
              aria-label={`${donation.donor} donation status`}
              aria-valuemin={1}
              aria-valuemax={4}
              aria-valuenow={stage + 1}
              aria-valuetext={STAGES[stage]}
            >
              {STAGES.map((name, s) => (
                <div key={name} className="h-3 bg-paper/20">
                  <div
                    className="h-full bg-marigold transition-[width] duration-700 ease-out"
                    style={{ width: s <= stage ? "100%" : "0%" }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 flex items-center gap-1.5 font-display text-sm font-semibold">
              {stage === 3 ? <Check size={16} className="text-marigold" aria-hidden="true" /> : null}
              {STAGES[stage]}
              <span className="font-normal text-paper/75">· step {stage + 1} of 4</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
