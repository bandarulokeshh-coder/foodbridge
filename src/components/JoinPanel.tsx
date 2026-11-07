"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { JOIN_EVENT, type JoinTab } from "./JoinLink";

const TABS: { id: JoinTab; label: string }[] = [
  { id: "donate", label: "Donate food" },
  { id: "volunteer", label: "Volunteer" },
  { id: "partner", label: "Partner with us" },
];

const inputClass =
  "mt-1.5 block min-h-12 w-full border-[3px] border-ink bg-white px-3.5 py-2 font-body text-lg text-ink placeholder:text-ink/60";

function TextField({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  min?: number;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="font-display text-base font-bold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        min={min}
        className={inputClass}
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="font-display text-base font-bold">
        {label}
      </label>
      <select id={id} name={name} required defaultValue="" className={inputClass}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

type Confirmation = { title: string; body: string };

function DonateForm({ onDone }: { onDone: (c: Confirmation) => void }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    onDone({
      title: `Thank you, ${String(d.get("name")).trim()}.`,
      body: `Your ${String(d.get("type")).toLowerCase()} would now go to verified partners near ${String(d.get("area")).trim()}. In a real launch, someone would say yes within minutes.`,
    });
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <TextField label="Your name" name="name" autoComplete="name" />
      <SelectField label="What food do you have?" name="type" options={["Cooked meals", "Bakery items", "Fresh produce"]} />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Roughly how many portions?" name="qty" type="number" min={1} placeholder="e.g. 40" />
        <TextField label="Pickup area" name="area" placeholder="e.g. Koregaon Park" autoComplete="address-level2" />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        List this food
      </button>
    </form>
  );
}

function VolunteerForm({ onDone }: { onDone: (c: Confirmation) => void }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    onDone({
      title: `Welcome aboard, ${String(d.get("name")).trim()}.`,
      body: `We’d message you when a pickup near ${String(d.get("area")).trim()} needs a rider on ${String(d.get("when")).toLowerCase()}.`,
    });
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <TextField label="Your name" name="name" autoComplete="name" />
      <TextField label="Neighbourhood you can cover" name="area" placeholder="e.g. Viman Nagar" autoComplete="address-level2" />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="When are you free?" name="when" options={["Weekday evenings", "Weekend mornings", "Late nights", "Anytime"]} />
        <SelectField label="How would you travel?" name="ride" options={["On foot", "Bicycle", "Scooter or bike", "Car"]} />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Sign me up as a volunteer
      </button>
    </form>
  );
}

function PartnerForm({ onDone }: { onDone: (c: Confirmation) => void }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    onDone({
      title: `Thanks, ${String(d.get("org")).trim()}.`,
      body: `We’d review your details and write to ${String(d.get("email")).trim()} about verification, usually within two working days.`,
    });
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <TextField label="Organisation name" name="org" autoComplete="organization" />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="What kind of organisation?" name="kind" options={["NGO", "Community kitchen", "Shelter", "Food bank", "Hotel or restaurant"]} />
        <TextField label="Meals you serve a day" name="meals" type="number" min={1} placeholder="e.g. 200" />
      </div>
      <TextField label="Contact email" name="email" type="email" placeholder="you@example.org" autoComplete="email" />
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send partnership request
      </button>
    </form>
  );
}

export default function JoinPanel() {
  const [tab, setTab] = useState<JoinTab>("donate");
  const [done, setDone] = useState<Partial<Record<JoinTab, Confirmation>>>({});
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onTab = (e: Event) => setTab((e as CustomEvent<JoinTab>).detail);
    window.addEventListener(JOIN_EVENT, onTab);
    return () => window.removeEventListener(JOIN_EVENT, onTab);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = TABS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setTab(TABS[next].id);
    tabRefs.current[TABS[next].id]?.focus();
  };

  const finish = (c: Confirmation) => setDone((prev) => ({ ...prev, [tab]: c }));
  const reset = () => setDone((prev) => ({ ...prev, [tab]: undefined }));
  const confirmation = done[tab];

  return (
    <div className="border-4 border-ink bg-paper shadow-hard">
      <div role="tablist" aria-label="How would you like to help?" onKeyDown={onKeyDown} className="grid grid-cols-3 border-b-4 border-ink bg-tint">
        {TABS.map((t, i) => {
          const selected = t.id === tab;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[t.id] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls="join-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={`min-h-14 px-1.5 py-2 font-display text-[0.95rem] font-bold leading-tight sm:px-3 sm:text-lg ${
                i > 0 ? "border-l-4 border-ink" : ""
              } ${selected ? "bg-paper" : "bg-tint hover:bg-marigold"}`}
              style={selected ? { marginBottom: "-4px", paddingBottom: "calc(0.5rem + 4px)" } : undefined}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div id="join-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="p-5 sm:p-7">
        {confirmation ? (
          <div role="status" className="rise-in py-2">
            <CheckCircle2 size={40} className="text-leaf" aria-hidden="true" />
            <p className="mt-3 font-display text-3xl font-extrabold leading-tight">{confirmation.title}</p>
            <p className="mt-3 text-xl leading-relaxed">{confirmation.body}</p>
            <p className="mt-3 text-base text-ink/80">This is a design demo, so nothing was sent.</p>
            <button type="button" onClick={reset} className="btn btn-outline mt-6">
              Fill in the form again
            </button>
          </div>
        ) : (
          <>
            {tab === "donate" && <DonateForm onDone={finish} />}
            {tab === "volunteer" && <VolunteerForm onDone={finish} />}
            {tab === "partner" && <PartnerForm onDone={finish} />}
          </>
        )}
      </div>
    </div>
  );
}
