import { BookOpen, MessageCircle, Heart } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "같은 책을 읽은 사람",
    body: "외모나 스펙이 아니라, 함께 읽은 한 권의 책으로 이어집니다. 취향이 비슷한 이성을 자연스럽게 발견해보세요.",
  },
  {
    icon: MessageCircle,
    title: "얕지 않은 대화",
    body: "어색한 인사말 대신 좋아하는 작가, 인상 깊었던 문장으로 첫 마디를 시작하세요. 공감대가 있으면 말문이 트입니다.",
  },
  {
    icon: Heart,
    title: "천천히, 깊게",
    body: "스와이프 한 번이 아닌 한 권의 책으로 가까워지는 인연. 담서는 빠른 매칭보다 오래 가는 연결을 추구합니다.",
  },
];

export function Concept() {
  return (
    <section
      id="concept"
      className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[var(--color-primary)]">
            왜 담서인가요?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            책 한 권으로 시작되는,
            <br />
            조금 다른 인연.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)]">
            담서는 외모나 직업보다 ‘무엇을 읽는 사람인가’를 먼저 봅니다.
            취향이 닿는 사람과 깊이 있는 대화를 나눠보세요.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
