import {motion} from "framer-motion"
import {RevealOnScroll} from "../RevealOnScroll"
import Image from "../../assets/profilePicture.jpeg";

export const About = () => {
    const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"]
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"]

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    }

    const photoVariants = {
        hidden: {scale: 0.8, opacity: 0, rotateY: 30},
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2,
            },
        },
    }

    return (
        <div
            className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
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
                            About Me
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

                        {/* Subtitle */}
                        <motion.p
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.7}}
                            className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto"
                        >
                            Passionate developer crafting digital experiences
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-12">
                        {/* Photo Section */}
                        <motion.div
                            className="lg:col-span-2 flex justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.3}}
                            variants={photoVariants}
                            whileHover={{scale: 1.05, y: -5}}
                        >
                            <div
                                className="relative w-64 h-74 md:w-90 md:h-85 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white dark:ring-slate-700">
                                <img src={Image} alt="Profile Photo"
                                     className="object-cover"/>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent mix-blend-overlay"/>
                            </div>
                        </motion.div>

                        {/* Bio Section */}
                        <motion.div
                            className="lg:col-span-3 rounded-2xl p-8 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg dark:shadow-slate-700/10"
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.5}}
                            whileHover={{scale: 1.05, y: -5}}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hello there! 👋</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed text-justify">
                                My name is Alkami from Bangladesh. I'm a passionate developer with expertise in building
                                scalable web applications and
                                creating innovative solutions. With a strong foundation in both frontend and backend
                                technologies.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
                                I love learning and working with various
                                companies on a wide range of projects, expanding my knowledge and expertise on a daily
                                basis. I hope we have the opportunity to work together.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="rounded-2xl p-8 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                                Frontend Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {frontendSkills.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-blue-100 dark:border-blue-800/30"
                                        whileHover={{scale: 1.05, y: -5}}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-2xl p-8 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-lg mr-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </span>
                                Backend Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {backendSkills.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 text-cyan-600 dark:text-cyan-400 py-2 px-4 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-cyan-100 dark:border-cyan-800/30"
                                        whileHover={{scale: 1.05, y: -5}}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
                                Education
                            </h3>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <motion.li
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                    whileHover={{x: 5}}
                                >
                                    <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">B.S. in
                                        Computer Science</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">XYZ University
                                        (2016-2020)</p>
                                    <p>
                                        Relevant Coursework: Data Structures, Web Development, Cloud Computing,
                                        Algorithms, Database Systems
                                    </p>
                                </motion.li>
                                <motion.li
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                    whileHover={{x: 5}}
                                >
                                    <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">Full-Stack
                                        Web Development</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Online Certification
                                        (2021)</p>
                                    <p>Specialized in modern JavaScript frameworks and cloud deployment strategies</p>
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                                Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                <motion.div
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                    whileHover={{x: 5}}
                                >
                                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                                        Software Engineer at ABC Corp
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2020 - Present</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Developed and maintained microservices for cloud-based applications</li>
                                        <li>Implemented CI/CD pipelines to streamline deployment processes</li>
                                        <li>Collaborated with cross-functional teams to deliver high-quality software
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                    whileHover={{x: 5}}
                                >
                                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Intern at
                                        DEF Startups</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2019</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Assisted in building front-end components and integrating REST APIs</li>
                                        <li>Participated in code reviews and agile development processes</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </div>
    )
}

