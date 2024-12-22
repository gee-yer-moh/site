import "./globals.css";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Guillermo Avelar",
  description: "My personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
