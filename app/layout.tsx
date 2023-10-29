import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Aplicación de clima 🌤",
  description: "Proyecto Next 2do Corte",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
