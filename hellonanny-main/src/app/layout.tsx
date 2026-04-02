import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Hello Nanny | Nanny & Maid Matching Service in Bangkok",
  description:
    "Find trusted nannies & maids in Bangkok. Over 1,000 registered nannies. Simple 3-step process. Pay only after matching.",
  keywords:
    "nanny bangkok, maid bangkok, babysitter thailand, housekeeper bangkok, nanny matching service",
  openGraph: {
    title: "Hello Nanny | Nanny & Maid Matching Service in Bangkok",
    description:
      "Find trusted nannies & maids in Bangkok. Over 1,000 registered nannies. Simple 3-step matching process.",
    type: "website",
    url: "https://hellonanny-san.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
