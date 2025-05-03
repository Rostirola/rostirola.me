import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-6 py-12">
            <div className="text-center space-y-6">
                <h1 className="text-7xl font-black text-white drop-shadow-md mb-2 animate-bounce">404</h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Oops! Página não encontrada</h2>
                <p className="text-lg text-gray-300 mb-8">
                    Parece que você tentou acessar uma página que não existe ou foi removida.<br />
                    Volte para a página inicial e continue navegando pelo meu portfólio!
                </p>
                <Link href="/" passHref legacyBehavior>
                    <a className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:bg-blue-700 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Voltar para o início
                    </a>
                </Link>
            </div>

            <div className="absolute bottom-8 right-8 group">
                <svg
                    width="80"
                    height="80"
                    fill="none"
                    viewBox="0 0 80 80"
                    className="transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                >
                    <circle cx="40" cy="40" r="38" stroke="#7B61FF" strokeWidth="4" />
                    <circle cx="40" cy="40" r="28" fill="#A5B4FC" fillOpacity={0.25} />
                    <text
                        x="50%"
                        y="57%"
                        textAnchor="middle"
                        fill="#7B61FF"
                        fontSize="22"
                        fontWeight="bold"
                    >
                        ?
                    </text>
                </svg>

                <div className="pointer-events-none absolute -top-40 right-5 w-64 p-3 bg-white text-blue-900 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-blue-200">
                    <strong>Página não encontrada</strong><br />
                    Você tentou acessar uma página inexistente ou removida.<br />
                    Use o botão acima para voltar para o início.
                    <div className="absolute right-3 -bottom-2 rotate-45 w-3 h-3 bg-white border-l border-b border-blue-200"></div>
                </div>
            </div>
        </main>
    );
}
