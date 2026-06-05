import Link from "next/link";
import {
  footerCompanyLinks,
  footerConnectLinks,
  footerShopLinks,
} from "@/lib/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="footer-col">
      <h5>{title}</h5>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <img className="site-footer__logo" src="/moral-logo.svg" alt="MORAL" />
          <p>
            Built on conviction. Designed for permanence. Worn with intention.
          </p>
        </div>
        <FooterColumn title="Shop" links={footerShopLinks} />
        <FooterColumn title="Company" links={footerCompanyLinks} />
        <FooterColumn title="Connect" links={footerConnectLinks} />
      </div>
      <div className="site-footer__bottom">
        <span>© MMXXVI MORAL. All rights reserved.</span>
        <div className="site-footer__legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/shipping">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}
