"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="site-header__brand" aria-label="MORAL home">
        <img className="site-header__logo" src="/moral-logo.svg" alt="MORAL" />
      </Link>
      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "is-active" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="site-header__actions">
        <Link href="/shop">Cart (0)</Link>
        <button className="nav-menu-button" type="button" aria-label="Menu">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
