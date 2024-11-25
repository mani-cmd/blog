import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mani's Blog",
  description: "Archive of writings",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>Mani's Blog</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Made with 💛</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
