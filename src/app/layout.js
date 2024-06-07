import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

export const metadata = {
  title: "Seguridad Vial",
  description: "Un sitio web para destacar la importancia de la seguridad vial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
