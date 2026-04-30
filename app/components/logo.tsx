import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/assets/logo-text-white.png"
      : "/assets/logo-text-black.png";

  return (
    <Link
      href="#top"
      aria-label="담서 홈으로 이동"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt="Damseo"
        width={624}
        height={192}
        priority
        className="h-7 w-auto md:h-8"
      />
    </Link>
  );
}
