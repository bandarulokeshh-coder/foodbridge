export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M4 29V27C4 16.5 10.5 10 19 10S34 16.5 34 27V29"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M13 29V25C13 21.5 15.5 19 19 19S25 21.5 25 25V29"
          fill="#FFC83D"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M2 30H36" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
      </svg>
      <span className="font-display text-2xl font-extrabold tracking-tight">FoodBridge</span>
    </span>
  );
}
