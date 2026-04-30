import Link from "next/link";
import { Mail, Instagram } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { StoreButtons } from "./store-buttons";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-primary)] py-20 text-white md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-bold leading-snug md:text-4xl">
          지금 담서에서
          <br className="md:hidden" />
          {" "}책 이야기를 나눠보세요.
        </h2>
        <p className="mt-5 text-base text-white/80 md:text-lg">
          무료로 시작하고, 나와 책으로 통하는 사람을 만나보세요.
        </p>

        <div className="mt-10 flex justify-center">
          <StoreButtons variant="dark" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href={`mailto:${LINKS.email}`}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm transition-colors hover:bg-white/10"
          >
            <Mail size={18} className="opacity-80" />
            <span className="font-medium">{LINKS.email}</span>
          </Link>
          <Link
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm transition-colors hover:bg-white/10"
          >
            <Instagram size={18} className="opacity-80" />
            <span className="font-medium">@damseo.app</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
