import Link from "next/link";

export default function Header() {
    return (
        <div className="grid grid-cols-3 items-center gap-4 px-4 py-2">

            <div className="col-span-1 flex items-center">
                <h1 className="text-[#FF6B6B] font-bold text-xl">
                    Enzo Terenziani
                </h1>
            </div>


            <div className="col-span-1 flex justify-between space-x-8 list-none">
                <Link href="#about" className="list-none text-[#37424f] hover:text-[#FF6B6B] px-4 py-4 text-xl">About me</Link>
                <Link href="#projects" className="text-[#37424f] hover:text-[#FF6B6B] px-4 py-4 text-xl">Projects</Link>
                <Link href="#contact" className="text-[#37424f] hover:text-[#FF6B6B] px-4 py-4 text-xl">Contact</Link>
            </div>


            <div className="col-span-1 flex justify-end space-x-4">
                <span className="text-[#37424f] underline underline-offset-2 decoration-2 cursor-pointer">
                    DE
                </span>
                <span className="text-[#c1c6cc] cursor-pointer">EN</span>
            </div>
        </div>
    );
}