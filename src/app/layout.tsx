import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "전국 보건소 위치 안내",
  description: "전국 보건소 위치 안내 서비스 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="8d0adb20f574d2b9ce583dffb9646df469aecb0f"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
