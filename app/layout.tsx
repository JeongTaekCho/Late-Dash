import type { Metadata } from "next";
import "./globals.css";
import RootLayoutProvider from "@/app/RootLayoutProvider";
import Header from "@/src/shared/components/Header";

export const metadata: Metadata = {
  title: "지각 위기 탐지",
  description:
    "아침 루틴 등을 기록하고 실시간 대중교통 상황을 연동하여 지각하지 않도록 도와주는 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutProvider>
          <Header />
          {children}
        </RootLayoutProvider>
      </body>
    </html>
  );
}
