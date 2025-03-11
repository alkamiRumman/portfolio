import { RevealOnScroll } from "../RevealOnScroll"
import {motion} from "framer-motion";

export const Projects = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-slate-800">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div className="relative mb-16 text-center">
                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-20 dark:opacity-10"
                            initial={{scale: 0, rotate: -30}}
                            animate={{scale: 1, rotate: 0}}
                        >
                            <div
                                className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/30 blur-xl"/>
                        </motion.div>

                        {/* Decorative shapes */}
                        <motion.div
                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                        >
                            <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 mb-3"/>
                            <div className="w-8 h-1 rounded-full bg-cyan-400 dark:bg-cyan-300 mb-3 ml-2"/>
                            <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"/>
                        </motion.div>

                        <motion.div
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block rotate-180"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                        >
                            <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mb-3"/>
                            <div className="w-8 h-1 rounded-full bg-blue-400 dark:bg-blue-300 mb-3 ml-2"/>
                            <div className="w-3 h-3 rounded-full bg-cyan-600 dark:bg-cyan-500"/>
                        </motion.div>

                        {/* Main title */}
                        <motion.h2
                            initial={{opacity: 0, y: -20, scale: 0.9}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            whileHover={{scale: 1.05}}
                            className="relative text-4xl md:text-6xl font-extrabold text-center
               bg-gradient-to-r from-blue-500 to-cyan-800 dark:from-blue-400 dark:to-cyan-300
               bg-clip-text text-transparent tracking-wide z-10 hover:scale-105 hover:text-blue-700 dark:hover:text-blue-400 transition-transform"
                        >
                            Featured Projects
                        </motion.h2>

                        {/* Animated underline */}
                        <motion.div
                            // className="relative h-1 w-40 mx-auto mt-6 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
                            className="relative h-1 w-40 mx-auto mt-6 overflow-hidden rounded-full inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-300 dark:to-cyan-200"
                            initial={{x: "-100%"}}
                            animate={{x: 0}}
                            transition={{duration: 2.5, delay: 1, ease: "easeInOut"}}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-300 dark:to-cyan-200"
                                initial={{x: "-100%"}}
                                animate={{x: 0}}
                                transition={{duration: 1.5, delay: 0.9}}
                            />
                        </motion.div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white"> Cloud Platform</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AI Analytics Dashboard</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                ML-powered data visualization platform with predictive analytics and interactive reports.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-200 dark:hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">E-Commerce Web App</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="
                      bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-200 dark:hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Real-Time Chat App</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Scalable chat platform supporting real-time messaging, presence, and group chat features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-200 dark:hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    )
}

