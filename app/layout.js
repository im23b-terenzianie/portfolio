import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex items-center justify-between px-4 py-2">
            {/* Linker Bereich: Name + Navigation */}
            <div className="flex items-center space-x-8">
                <h1 className="text-[#FF6B6B] font-bold text-xl">
                    Enzo Terenziani
                </h1>
                <nav>
                    <ul className="flex items-center space-x-6 text-[#37424f]">
                        <li>
                            <Link href="/">About me</Link>
                        </li>
                        <li>
                            <Link href="/about">Project</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Rechter Bereich: Sprachumschaltung */}
            <div className="flex items-center space-x-2 text-sm">
            <span className="text-[#37424f] underline underline-offset-2 decoration-2 cursor-pointer">
              DE
            </span>
                <span className="text-[#c1c6cc] cursor-pointer">EN</span>
            </div>
        </header>

        {children}
        </body>
        </html>
    );
}
