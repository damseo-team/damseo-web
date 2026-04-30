import Link from "next/link";
import { LINKS } from "@/lib/constants";

type Variant = "light" | "dark";

export function StoreButtons({
  variant = "light",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isDark = variant === "dark";
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const cls = isDark
    ? "bg-white text-[#1F2A1E] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]"
    : "bg-[#1F2A1E] text-white shadow-[0_8px_24px_-8px_rgba(31,42,30,0.4)]";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link
        href={LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store에서 담서 다운로드"
        className={`${base} ${cls}`}
      >
        <AppleIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] tracking-wider opacity-80">
            Download on the
          </span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </Link>
      <Link
        href={LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play에서 담서 다운로드"
        className={`${base} ${cls}`}
      >
        <PlayIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] tracking-wider opacity-80">GET IT ON</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.365 1.43c0 1.14-.42 2.21-1.18 3-.83.86-2.17 1.52-3.27 1.43-.13-1.1.4-2.27 1.13-3.05.81-.85 2.21-1.49 3.32-1.38zM20.5 17.27c-.32.74-.7 1.45-1.14 2.13-.61.93-1.13 1.58-1.55 1.93-.65.6-1.35.9-2.1.91-.54.01-1.19-.16-1.95-.5-.76-.34-1.46-.5-2.1-.5-.67 0-1.4.16-2.18.5-.78.34-1.4.52-1.88.54-.72.03-1.43-.27-2.13-.91-.46-.39-1-1.06-1.61-2.02-.66-1.03-1.21-2.22-1.63-3.59-.45-1.48-.68-2.92-.68-4.31 0-1.59.34-2.96 1.03-4.11C5.46 6.27 6.45 5.5 7.6 5c1.16-.5 2.4-.76 3.74-.79.57.02 1.32.21 2.27.55.95.34 1.56.53 1.83.55.2.02.88-.18 2.04-.6 1.1-.39 2.02-.55 2.78-.49 2.06.17 3.61 1 4.63 2.51-1.84 1.13-2.75 2.71-2.73 4.74.02 1.58.57 2.9 1.66 3.95.49.49 1.04.86 1.65 1.13-.13.39-.27.77-.42 1.13z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.6 1.5C3.23 1.78 3 2.27 3 2.95v18.1c0 .68.23 1.17.6 1.45l9.97-10.5L3.6 1.5zm10.93 11.1l2.9 3.05-11.7 6.7c-.36-.04-.68-.18-.95-.4l9.75-9.35zm0-1.2L4.78 2.05c.27-.22.59-.36.95-.4l11.7 6.7-2.9 3.05zm6.49-2.43c.78.45.78 1.62 0 2.06l-2.7 1.55L15.4 12l2.92-2.58 2.7 1.55z" />
    </svg>
  );
}
