import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 페이스메이커",
  description: "면접 발표 교정",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
