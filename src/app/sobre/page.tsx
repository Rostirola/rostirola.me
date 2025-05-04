import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sobre | Juan Rostirola",
    description: "Conheça mais sobre Juan Rostirola, desenvolvedor web e suas habilidades técnicas",
    openGraph: {
        title: "Sobre | Juan Rostirola",
        description: "Conheça mais sobre Juan Rostirola, desenvolvedor web e suas habilidades técnicas",
        images: ['/edited_image.png']
    },
}

export default function Sobre() {
    return (
        <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Seção de Introdução */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-48 h-48 relative flex-shrink-0">
                            <Image
                                src="/edited_image.png"
                                alt="Juan Rostirola"
                                fill
                                className="rounded-xl object-cover shadow-lg"
                                sizes="(max-width: 768px) 192px, 192px"
                                priority
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                                Olá, sou o Juan Rostirola
                            </h1>
                            <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                                Desenvolvedor Web apaixonado por criar experiências digitais intuitivas e eficientes.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contato"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition shadow-md"
                                >
                                    Entre em contato
                                </Link>
                                <Link
                                    href="/projetos"
                                    className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-2 rounded-lg font-semibold transition shadow-sm"
                                >
                                    Ver projetos
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção Sobre Mim */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        Sobre Mim
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Sou um desenvolvedor web focado em tecnologias front-end e back-end modernas. Minha jornada na programação começou em 2018, e desde então venho me dedicando a aprimorar minhas habilidades e acompanhar as tendências do setor.
                        </p>
                        <p>
                            Com experiência em desenvolvimento de aplicações web com React, Next.js e Node.js, busco sempre implementar soluções que combinem código limpo, performance e ótima experiência do usuário. Acredito que a melhor tecnologia é aquela que resolve problemas reais de forma eficiente.
                        </p>
                        <p>
                            Além do desenvolvimento, gosto de compartilhar conhecimento e colaborar em equipes multidisciplinares, onde posso tanto aprender quanto contribuir com minha experiência.
                        </p>
                    </div>
                </section>

                {/* Seção de Formação */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        Formação
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600">Bacharelado em Ciência da Computação</h3>
                            <p className="text-lg">Universidade XYZ, 2018-2022</p>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                Formação completa em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software. Desenvolvi projetos práticos em diversas áreas, incluindo desenvolvimento web e mobile.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-600">Especialização em Desenvolvimento Full Stack</h3>
                            <p className="text-lg">Instituto de Tecnologia ABC, 2022-2023</p>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                Programa intensivo focado em tecnologias modernas de desenvolvimento web, incluindo React, Node.js e arquiteturas de microsserviços.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Seção de Habilidades */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        Habilidades Técnicas
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                Front-end
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>React & Next.js</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>TypeScript</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Tailwind CSS</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>HTML5 & CSS3</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Responsive Design</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                Back-end
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Node.js & Express</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>APIs RESTful</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>MongoDB & PostgreSQL</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Autenticação & Segurança</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Cloud (AWS, Firebase)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                Ferramentas & Métodos
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Git & GitHub</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Docker</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>CI/CD</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Metodologias Ágeis</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Testing (Jest, React Testing Library)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                Soft Skills
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Comunicação eficiente</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Trabalho em equipe</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Gestão de tempo</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Resolução de problemas</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">▹</span>
                                    <span>Pensamento crítico</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Seção de Interesses */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        Além do Código
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Quando não estou programando, gosto de me envolver em outras atividades que me mantêm criativo e inspirado:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            <li className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                <span className="mr-3 text-blue-600 text-xl">📚</span>
                                <span>Leitura de livros técnicos e ficção científica</span>
                            </li>
                            <li className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                <span className="mr-3 text-blue-600 text-xl">🎮</span>
                                <span>Jogos que estimulam o raciocínio lógico</span>
                            </li>
                            <li className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                <span className="mr-3 text-blue-600 text-xl">🏃‍♂️</span>
                                <span>Praticar atividades físicas regularmente</span>
                            </li>
                            <li className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                <span className="mr-3 text-blue-600 text-xl">🌱</span>
                                <span>Contribuir para projetos open source</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">
                        Vamos trabalhar juntos?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto">
                        Estou sempre aberto a novos projetos, colaborações e oportunidades interessantes.
                        Não hesite em entrar em contato!
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            href="/contato"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
                        >
                            Fale comigo
                        </Link>
                        <a
                            href="mailto:juanrostirola@gmail.com"
                            className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold transition shadow-sm"
                        >
                            juanrostirola@gmail.com
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
