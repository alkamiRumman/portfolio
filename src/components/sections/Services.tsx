import {RevealOnScroll} from "../RevealOnScroll"
import {motion} from "framer-motion";

export const Services = () => {
    const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"]

    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"]

    return (
        <div className="min-h-screen flex items-center justify-center py-20">
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
                            Services
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

                    <div
                        className="rounded-xl p-8 border-gray-200 dark:border-white/10 border bg-white dark:bg-transparent hover:-translate-y-1 transition-all shadow-sm dark:shadow-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable web applications and creating
                            innovative
                            solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div
                            className="p-6 rounded-xl border-gray-200 dark:border-white/10 border bg-white dark:bg-transparent hover:-translate-y-1 transition-all shadow-sm dark:shadow-none">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Computer Science </strong> - XYZ University (2016-2020)
                                </li>
                                <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
                            </ul>
                        </div>
                        <div
                            className="p-6 rounded-xl border-gray-200 dark:border-white/10 border bg-white dark:bg-transparent hover:-translate-y-1 transition-all shadow-sm dark:shadow-none">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white"> 💼 Work
                                Experience </h3>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Software Engineer at ABC Corp (2020 - Present) </h4>
                                    <p>Developed and maintained microservices for cloud-based applications.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold"> Intern at DEF Startups (2019) </h4>
                                    <p>Assisted in building front-end components and integration REST APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    )
}