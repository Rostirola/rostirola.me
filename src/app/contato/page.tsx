"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contato() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.nome.trim()) {
            newErrors.nome = "Nome é obrigatório";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.assunto.trim()) {
            newErrors.assunto = "Assunto é obrigatório";
        }

        if (!formData.mensagem.trim()) {
            newErrors.mensagem = "Mensagem é obrigatória";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSending(true);

        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao enviar mensagem');
            }

            setSubmitted(true);
            setFormData({ nome: "", email: "", assunto: "", mensagem: "" });

            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Cabeçalho */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                            Entre em contato
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Tem um projeto em mente? Quer conversar sobre uma oportunidade? Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                Informações de contato
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                                        <p className="text-sm font-medium">Email</p>
                                        <a href="mailto:juanrostirola@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">juanrostirola@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                                        <p className="text-sm font-medium">LinkedIn</p>
                                        <a href="https://linkedin.com/in/juan-rostirola-246695222"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-blue-600 dark:text-blue-400 hover:underline">
                                            juan-rostirola
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                                        <p className="text-sm font-medium">GitHub</p>
                                        <a href="https://github.com/Rostirola"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-blue-600 dark:text-blue-400 hover:underline">
                                            Rostirola
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Siga-me nas redes sociais
                                </h3>
                                <div className="mt-4 flex space-x-4">
                                    <a href="https://github.com/Rostirola"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.338c1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/in/juan-rostirola-246695222"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.34 20h-3v-10.84h3v10.84zm-1.5-12.25c-.967 0-1.75-.786-1.75-1.751 0-.965.783-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .965-.782 1.751-1.75 1.751zm15.84 12.25h-3v-5.6c0-1.336-.024-3.056-1.865-3.056-1.866 0-2.154 1.455-2.154 2.959v5.697h-3v-10.84h2.885v1.482h.041c.402-.762 1.384-1.565 2.85-1.565 3.049 0 3.613 2.008 3.613 4.623v6.3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            {submitted ? (
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center justify-center h-full">
                                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-900 mb-4">
                                        <svg className="h-8 w-8 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Obrigado pelo contato!</h2>
                                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
                                        Sua mensagem foi enviada com sucesso. Entrarei em contato o mais breve possível.
                                    </p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                                        Você será redirecionado para a página inicial em alguns segundos...
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Nome completo
                                            </label>
                                            <input
                                                type="text"
                                                name="nome"
                                                id="nome"
                                                value={formData.nome}
                                                onChange={handleChange}
                                                className={`mt-1 block w-full rounded-md ${
                                                    errors.nome ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                                                } shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                            />
                                            {errors.nome && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nome}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`mt-1 block w-full rounded-md ${
                                                    errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                                                } shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Assunto
                                        </label>
                                        <select
                                            id="assunto"
                                            name="assunto"
                                            value={formData.assunto}
                                            onChange={handleChange}
                                            className={`mt-1 block w-full rounded-md ${
                                                errors.assunto ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                                            } shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                        >
                                            <option value="">Selecione um assunto</option>
                                            <option value="projeto">Projeto</option>
                                            <option value="vaga">Oportunidade de emprego</option>
                                            <option value="freelance">Trabalho freelance</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                        {errors.assunto && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.assunto}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Mensagem
                                        </label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            rows={6}
                                            value={formData.mensagem}
                                            onChange={handleChange}
                                            className={`mt-1 block w-full rounded-md ${
                                                errors.mensagem ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                                            } shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                        />
                                        {errors.mensagem && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.mensagem}</p>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={sending}
                                            className={`inline-flex justify-center items-center w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {sending ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Enviando...
                                                </>
                                            ) : (
                                                'Enviar mensagem'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
