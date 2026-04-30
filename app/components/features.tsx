import Image from "next/image";

type Feature = {
  badge: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    badge: "01 · 책장",
    title: "내가 읽은 책을 책장에 모아보세요",
    body: "기록은 곧 나의 취향이 됩니다. 읽은 책을 등록할수록 더 정확한 매칭과 풍부한 대화 거리를 만나게 돼요.",
    image: "/assets/app-mybook.png",
    alt: "담서 내 책장 화면",
  },
  {
    badge: "02 · 검색",
    title: "방대한 도서 데이터에서 책을 검색하세요",
    body: "ISBN 기반 도서 데이터로 어떤 책이든 손쉽게 찾고 등록할 수 있습니다. 절판된 책, 외국 원서까지 한 번에.",
    image: "/assets/app-booksearch.png",
    alt: "담서 책 검색 화면",
  },
  {
    badge: "03 · 채팅",
    title: "책 이야기로 자연스럽게 대화를 시작하세요",
    body: "쪽지가 수락되면 채팅이 열립니다. 좋아하는 책에 대해 묻고 답하다 보면 어느새 깊은 이야기로 이어져요.",
    image: "/assets/app-chatting.png",
    alt: "담서 채팅 화면",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[var(--color-primary)]">
            주요 기능
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            책으로 시작해서, 대화로 이어집니다.
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {FEATURES.map((f, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={f.title}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reverse ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="text-center md:text-left">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-primary)]">
                    {f.badge}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold leading-snug text-[var(--color-ink)] md:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-[17px]">
                    {f.body}
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
                  <div
                    aria-hidden
                    className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-[var(--color-primary-soft)] via-[var(--color-accent-soft)] to-[var(--color-bg)]"
                  />
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 24rem, 18rem"
                      className="object-contain drop-shadow-[0_15px_35px_rgba(31,42,30,0.15)]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
