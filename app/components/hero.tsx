import { SITE } from "@/lib/constants";
import { StoreButtons } from "./store-buttons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-primary)] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--color-accent)]/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pt-24 pb-28 text-center md:px-8 md:pt-32 md:pb-36">
        <p className="mb-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
          {SITE.slogan}
        </p>
        <h1 className="text-3xl font-bold leading-[1.3] tracking-tight md:text-5xl md:leading-[1.25]">
          한 권만이라도 같은 책을 읽었다면,
          <br />
          <span className="text-[var(--color-accent)]">밤새 이야기</span>를
          나눌 수 있어요.
        </h1>
        <p className="mt-6 text-base text-white/85 md:text-lg">
          독서 기반 소개팅 · 채팅 · 매칭, 담서.
          <br className="hidden md:block" />
          같은 책을 읽은 사람과 깊은 대화를 시작하세요.
        </p>
        <div className="mt-10">
          <StoreButtons variant="dark" />
        </div>
      </div>
    </section>
  );
}
