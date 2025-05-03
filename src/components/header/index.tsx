"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/edited_image.png"
                            alt="Logo - Juan"
                            fill
                            sizes="48px"
                            className="rounded-full object-cover border-2 border-blue-600 group-hover:border-blue-700 transition"
                            priority
                        />
                    </div>
                    <span className="flex flex-col items-center leading-tight pl-2">
                        <span className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition">
                            Juan
                        </span>
                        <span className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition tracking-wide">
                            Portfólio
                        </span>
                    </span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link href="/sobre" className="text-gray-600 hover:text-blue-600 font-medium transition">Sobre</Link>
                    <Link href="/projetos" className="text-gray-600 hover:text-blue-600 font-medium transition">Projetos</Link>
                    <Link href="/contato" className="text-gray-600 hover:text-blue-600 font-medium transition">Contato</Link>
                </nav>
                <Link
                    href="/contato"
                    className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition hidden md:inline"
                >
                    Fale comigo
                </Link>
                <button
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden ml-2 p-2 rounded hover:bg-gray-100 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden bg-white px-4 py-2 space-y-2 border-t shadow-sm" onClick={() => setMenuOpen(false)}>
                    <Link href="/sobre" className="block text-gray-700 hover:text-blue-600 font-medium transition">Sobre</Link>
                    <Link href="/projetos" className="block text-gray-700 hover:text-blue-600 font-medium transition">Projetos</Link>
                    <Link href="/contato" className="block text-gray-700 hover:text-blue-600 font-medium transition">Contato</Link>
                    <Link
                        href="/contato"
                        className="block bg-blue-600 text-white px-5 py-2 mt-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                    >
                        Fale comigo
                    </Link>
                </nav>
            )}
        </header>
    );
}
