import Logo from "./Logo";
import JoinLink from "./JoinLink";

const linkClass = "inline-block py-1 underline-offset-4 hover:underline";

export default function Footer() {
  return (
    <footer data-dark className="border-t-4 border-ink bg-ink text-paper">
      <div className="wrap grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="text-paper" />
          <p className="mt-4 max-w-xs text-lg leading-relaxed text-paper/90">
            Good food, on its way to someone who needs it.
          </p>
        </div>

        <nav aria-label="Explore">
          <h2 className="text-xl">Explore</h2>
          <ul className="mt-3 space-y-1 text-lg">
            <li><a className={linkClass} href="#how-it-works">How it works</a></li>
            <li><a className={linkClass} href="#calculator">Meals calculator</a></li>
            <li><a className={linkClass} href="#impact">Impact</a></li>
            <li><a className={linkClass} href="#stories">Stories</a></li>
          </ul>
        </nav>

        <nav aria-label="Get involved">
          <h2 className="text-xl">Get involved</h2>
          <ul className="mt-3 space-y-1 text-lg">
            <li><JoinLink tab="donate" className={linkClass}>Donate food</JoinLink></li>
            <li><JoinLink tab="volunteer" className={linkClass}>Volunteer</JoinLink></li>
            <li><JoinLink tab="partner" className={linkClass}>Partner with us</JoinLink></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xl">Contact</h2>
          <p className="mt-3 text-lg">
            <a className="break-all underline underline-offset-4 hover:text-marigold" href="mailto:hello@foodbridge.example">
              hello@foodbridge.example
            </a>
          </p>
        </div>
      </div>

      <div className="border-t-2 border-paper/20">
        <p className="wrap py-6 text-base text-paper/85">
          © 2026 FoodBridge. Concept design for AI Prompt Battle by OSCode.
        </p>
      </div>
    </footer>
  );
}
