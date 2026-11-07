"use client";

import type { ReactNode } from "react";

export type JoinTab = "donate" | "volunteer" | "partner";

export const JOIN_EVENT = "foodbridge:tab";

/** An anchor to the join panel that also selects the right tab. */
export default function JoinLink({
  tab,
  className,
  children,
}: {
  tab: JoinTab;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#join"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<JoinTab>(JOIN_EVENT, { detail: tab }))}
    >
      {children}
    </a>
  );
}
