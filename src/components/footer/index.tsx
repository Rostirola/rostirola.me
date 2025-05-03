export default  function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 px-4 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-lg font-semibold tracking-wide">
                    © {new Date().getFullYear()} Juan. Todos os direitos reservados.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/Rostirola"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-indigo-400 transition"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483
              0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608
              1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.944
              0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12
              6.844a9.56 9.56 0 0 1 2.504.338c1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.699
              1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012
              2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/in/juan-rostirola-246695222"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-500 transition"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5
              5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24
              5-5v-14c0-2.76-2.24-5-5-5zm-11.34 20h-3v-10.84h3v10.84zm-1.5-12.25c-.967
              0-1.75-.786-1.75-1.751 0-.965.783-1.75 1.75-1.75s1.75.785
              1.75 1.75c0 .965-.782 1.751-1.75 1.751zm15.84 12.25h-3v-5.6c0-1.336-.024-3.056-1.865-3.056-1.866
              0-2.154 1.455-2.154 2.959v5.697h-3v-10.84h2.885v1.482h.041c.402-.762 1.384-1.565
              2.85-1.565 3.049 0 3.613 2.008 3.613 4.623v6.3z"/>
                        </svg>
                    </a>
                    <a
                        href="mailto:juanrostirola@gmail.com"
                        aria-label="Email"
                        className="hover:text-pink-400 transition"
                    >
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 8.25V17a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17V8.25m18 0A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0
                003 8.25m18 0v.243a2.25 2.25 0 01-.964 1.863l-6.72 4.479a2.25 2.25 0 01-2.464 0l-6.72-4.479A2.25 2.25
                0 013 8.493V8.25"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}