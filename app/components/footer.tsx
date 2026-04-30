import Link from "next/link";
import { Mail, Instagram } from "lucide-react";
import { Logo } from "./logo";
import { LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-soft)]">
              책을 읽고 담소를 나누다.
              <br />
              독서로 연결되는 새로운 만남, 담서.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <Link
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-primary)]"
            >
              <Mail size={16} />
              {LINKS.email}
            </Link>
            <Link
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-primary)]"
            >
              <Instagram size={16} />
              @damseo.app
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink-soft)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Damseo. All rights reserved.</p>
          <p>책으로 시작되는 인연, 담서.</p>
        </div>
      </div>
    </footer>
  );
}
