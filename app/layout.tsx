import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Church Note Taker",
  description: "Expect the BEST Note Taker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} container mx-auto min-h-screen px-4 py-6 xl:px-48`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
