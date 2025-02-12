import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "CODE WITH UNCLE-JOSHI",
  description: "portfoloio using next.js and gsap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
