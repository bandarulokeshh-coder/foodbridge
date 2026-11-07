"use client";

import { useCountUp } from "@/lib/hooks";

export default function CountStat({ target, label }: { target: number; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="border-t-4 border-paper pt-4">
      <p className="font-display text-6xl font-extrabold leading-none tabular-nums text-marigold sm:text-7xl">
        <span aria-hidden="true">{value.toLocaleString("en-US")}</span>
        <span className="sr-only">{target.toLocaleString("en-US")}</span>
      </p>
      <p className="mt-3 max-w-[16rem] text-lg leading-snug">{label}</p>
    </div>
  );
}
