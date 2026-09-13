const Footer = () => {
    return (
        <footer className="container mx-auto px-5 mt-16">

            <div className="border-t border-gray-100 pt-10 pb-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className="md:col-span-2">

                        <div className="flex items-center gap-2">

                            <div className="w-5 h-5 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                <span className="text-[9px] text-white font-bold">
                                    DS
                                </span>
                            </div>

                            <h2 className="font-semibold text-gray-900">
                                Dev <span className="text-pink-500">Stack</span>
                            </h2>

                        </div>

                        <p className="text-xs text-gray-500 max-w-sm mt-3 leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex gap-5 mt-5">

                            <a
                                href="#"
                                className="text-xs text-gray-700 hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-700 hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-700 hover:text-pink-500"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-xs font-semibold text-gray-900 mb-4">
                            PRODUCT
                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Projects
                            </a>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-xs font-semibold text-gray-900 mb-4">
                            COMPANY
                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Careers
                            </a>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-xs font-semibold text-gray-900 mb-4">
                            LEGAL
                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="text-xs text-gray-500 hover:text-pink-500"
                            >
                                Terms of Service
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-xs text-gray-400">
                    © 2026 Dev Stack. All rights reserved.
                </p>

                <div className="flex gap-6">

                    <a
                        href="#"
                        className="text-xs text-gray-400 hover:text-gray-700"
                    >
                        Privacy
                    </a>

                    <a
                        href="#"
                        className="text-xs text-gray-400 hover:text-gray-700"
                    >
                        Terms
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;