import Link from "next/link";

export default function Header() {
    return (
        <div className="grid grid-cols-2 items-center px-4 py-2">
            <div className="flex items-center space-x-8">
                <h1 className="text-[#FF6B6B] font-bold text-xl">
                    Enzo Terenziani
                </h1>
            </div>

            <div className="flex items-center justify-end space-x-5 text-sm">
                <nav>
                    <ul className="flex gap-8 text-[#37424f] list-none">
                        <li>
                            <Link href="#about" className="text-[#37424f] hover:text-[#FF6B6B]">About me</Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-[#37424f] hover:text-[#FF6B6B]">Projects</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-[#37424f] hover:text-[#FF6B6B]">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <span className="text-[#37424f] underline underline-offset-2 decoration-2 cursor-pointer">
                    DE
                </span>
                <span className="text-[#c1c6cc] cursor-pointer">EN</span>
            </div>
        </div>
    );
}