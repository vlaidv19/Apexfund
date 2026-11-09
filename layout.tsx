import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexFund | Trade with a plan",
  description: "ApexFund prop trading concept — challenges and instant simulated accounts.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
