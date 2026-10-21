import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Oswald({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Ideal Construction Solutions | Concrete Driveways in Brampton",
  description:
    "Stamped and exposed aggregate concrete driveways, driveway extensions, backyard concrete, walkways and garden boxes in Brampton and the GTA. Led by Karan. 5.0 stars from 66 Google reviews. Call (647) 225-7887.",
  openGraph: {
    title: "Ideal Construction Solutions | Concrete Driveways in Brampton",
    description: "Stamped and exposed aggregate driveways, extensions and backyard concrete by Karan's crew. 5.0 stars, 66 Google reviews. Call (647) 225-7887.",
    type: "website",
    locale: "en_CA",
    images: ["/images/photo1.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
