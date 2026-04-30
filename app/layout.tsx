import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "담서 - 책 한 권으로 시작되는 인연 | 독서 기반 소개팅",
    template: "%s | 담서",
  },
  description: SITE.description,
  keywords: [
    "독서 소개팅",
    "책 매칭",
    "담서",
    "Damseo",
    "독서 채팅",
    "취향 매칭",
    "독서 기반 소개팅",
    "책 좋아하는 사람",
  ],
  authors: [{ name: "Damseo" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE.url,
    siteName: SITE.name,
    title: "담서 - 책 한 권으로 시작되는 인연",
    description: SITE.description,
    images: [
      {
        url: "/assets/logo.jpg",
        width: 512,
        height: 512,
        alt: "담서 로고",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "담서 - 책 한 권으로 시작되는 인연",
    description: SITE.description,
    images: ["/assets/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#5C7C5A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
