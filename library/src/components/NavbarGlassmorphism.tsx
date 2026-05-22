'use client';

import { ChevronDown, Menu, Moon, X } from "lucide-react";
import { useState } from "react";
import type { Action, LinkItem } from "../types";
import { BrandWordmark } from "./_internal";

const defaultLinks: LinkItem[] = [
  { label: "Product", href: "/product" },
  { label: "Resources", href: "/resources" },
  { label: "Retention", href: "/retention" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export interface NavbarGlassmorphismProps {
  activePath?: string;
  links?: LinkItem[];
  action?: Action;
  brandHref?: string;
  brandLabel?: string;
  showBackdrop?: boolean;
}

export function NavbarGlassmorphism({
  activePath,
  links = defaultLinks,
  action = { label: "Start Free", href: "/trial" },
  brandHref = "/",
  brandLabel = "sendPUSH | Loyaltymaster",
  showBackdrop = true,
}: NavbarGlassmorphismProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`lm-ds wf-header${showBackdrop ? "" : " wf-header--plain"}`}>
      <div className="wf-nav-shell">
        <nav className="wf-nav-content" aria-label="Main navigation">
          <a className="wf-brand" href={brandHref} aria-label={`${brandLabel} home`}>
            <BrandWordmark />
          </a>
          <div className="wf-nav-links">
            {links.map((link) => {
              const isActive = activePath === link.href || (!activePath && link.label === "Product");
              const hasDropdown = link.label === "Product" || link.label === "Resources";
              return (
                <a key={link.href} className={isActive ? "is-active" : undefined} href={link.href} aria-current={isActive ? "page" : undefined}>
                  <span>{link.label}</span>
                  {hasDropdown ? <ChevronDown size={13} aria-hidden="true" /> : null}
                </a>
              );
            })}
            <button className="wf-theme-icon-toggle" type="button" aria-label={action.ariaLabel ?? "Switch to dark mode"} aria-pressed="false">
              <Moon size={18} aria-hidden="true" />
            </button>
          </div>
          <button className="wf-mobile-menu-toggle" type="button" aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen((value) => !value)}>
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </nav>
        {isOpen ? (
          <div className="wf-mobile-menu-panel">
            {links.map((link) => (
              <a key={link.href} className="wf-footer-link" href={link.href} aria-current={activePath === link.href ? "page" : undefined}>
                {link.label}
              </a>
            ))}
            <a className="wf-mobile-menu-cta" href={action.href ?? "#"}>{action.label}</a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
