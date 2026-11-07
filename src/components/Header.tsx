import Logo from "./Logo";
import JoinLink from "./JoinLink";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#impact", label: "Impact" },
  { href: "#stories", label: "Stories" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-paper">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 py-2 md:py-3">
        <a href="#top" aria-label="FoodBridge, back to top" className="py-1">
          <Logo />
        </a>

        <nav
          aria-label="Main"
          className="order-3 -mx-1 flex w-full items-center justify-between border-t-2 border-ink/15 pt-1 md:order-none md:mx-0 md:w-auto md:gap-8 md:border-0 md:pt-0"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-1 py-1.5 font-display text-base font-semibold underline-offset-4 hover:underline md:text-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <JoinLink tab="donate" className="btn btn-primary btn-sm">
          Donate food
        </JoinLink>
      </div>
    </header>
  );
}
