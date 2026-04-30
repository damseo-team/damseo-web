"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { LINKS, NAV_ITEMS } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "border-b border-[var(--color-line)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            앱 다운로드
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)]"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[var(--color-bg)] border-b border-[var(--color-line)] shadow-[var(--shadow-soft)]">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 p-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-[var(--color-ink)] hover:bg-[var(--color-primary-soft)]"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[var(--color-primary)] px-4 py-3 text-center text-base font-medium text-white"
            >
              앱 다운로드
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
