'use client';
import { useState } from "react";

export default function Header() {
    const [activeButton, setActiveButton] = useState("DE"); // Default active button

    return (
        <div className="grid grid-cols-3 items-center gap-4 px-4 py-2">
            <div className="col-span-1 flex items-center">
                <h1 className="text-[#FF6B6B] font-bold text-2xl">
                    Enzo Terenziani
                </h1>
            </div>

            <div className="col-span-1 flex justify-between space-x-8">
                <a href="#about" className="text-[#37424f] hover:text-[#FF6B6B] no-underline">Über mich</a>
                <a href="#projects" className="text-[#37424f] hover:text-[#FF6B6B] no-underline">Projekte</a>
                <a href="#contact" className="text-[#37424f] hover:text-[#FF6B6B] no-underline">Kontakt</a>
            </div>

            <div className="col-span-1 flex justify-end space-x-4">
                <button
                    className={`${activeButton === "DE" ? "bg-transparent border-0  text-[#37424f] underline" : "bg-transparent border-0 text-[#c1c6cc] underline"}`}
                    onClick={() => setActiveButton("DE")}
                >
                    DE
                </button>
                <button
                    className={`${activeButton === "EN" ? "bg-transparent border-0  text-[#37424f] underline" : "bg-transparent border-0  text-[#c1c6cc] underline"}`}
                    onClick={() => setActiveButton("EN")}
                >
                    EN
                </button>
            </div>
        </div>
    );
}