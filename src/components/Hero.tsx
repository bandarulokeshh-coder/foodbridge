import { ShieldCheck } from "lucide-react";
import JoinLink from "./JoinLink";
import PickupBoard from "./PickupBoard";

export default function Hero() {
  return (
    <section id="top" className="border-b-4 border-ink bg-marigold">
      <div className="wrap grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:py-24">
        <div>
          <h1 className="text-[2.9rem] sm:text-6xl lg:text-[4.5rem]">
            Your surplus food is someone’s{" "}
            <span className="box-decoration-clone bg-ink px-2 text-marigold">next meal.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">
            FoodBridge connects restaurants, hotels, event hosts and households with nearby NGOs.
            List what’s left, and a verified partner collects it while it’s still fresh.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <JoinLink tab="donate" className="btn btn-primary">
              Donate food
            </JoinLink>
            <JoinLink tab="partner" className="btn btn-outline">
              Partner with us
            </JoinLink>
          </div>
          <p className="mt-8 flex max-w-md items-start gap-2.5 text-base leading-snug">
            <ShieldCheck className="mt-0.5 shrink-0" size={22} aria-hidden="true" />
            Every partner is verified before it sees a single listing.
          </p>
        </div>

        <div className="pb-2 pr-2">
          <PickupBoard />
        </div>
      </div>
    </section>
  );
}
