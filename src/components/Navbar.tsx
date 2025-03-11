import {motion} from "framer-motion"
import {Sun, Moon} from "lucide-react"
import {useTheme} from "./ThemeContext"

// Smooth scroll function
const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        })
    }
}

interface NavbarProps {
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
    activeSection: string
}

export const Navbar = ({menuOpen, setMenuOpen, activeSection}: NavbarProps) => {
    const navLinks = ["Home", "About", "Services", "Projects", "Contact"]
    const {theme, toggleTheme} = useTheme()

    return (
        <motion.nav
            initial={{y: 0, opacity: 0}}
            animate={{y: [0, -2, 0], opacity: 1}}
            transition={{duration: 1.5, ease: "easeInOut"}}
            className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-white/80 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-sm shadow-lg z-40"
        >
            {/* Logo with Hover Animation */}
            <motion.a
                href=""
                role="button"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                }}
                whileHover={{
                    scale: 1.1
                }}
                transition={{duration: 0.3}}
                className={`font-mono font-bold uppercase duration-300 hover:shadow-md relative before:absolute
                before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-300
                before:animate-[underlineMove_3s_linear_infinite] motion-reduce:animate-none text-2xl 
                ${
                    theme === "dark" ? "text-white" : "text-black"
                }`}
            >
                Rumman IT Solution
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((item, index) => {
                    const sectionId = item.toLowerCase()
                    const isActive = activeSection === sectionId

                    return (
                        <a
                            key={index}
                            href={sectionId}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(sectionId);
                                setMenuOpen(false);
                            }}
                            className={`relative text-gray-600 dark:text-gray-300 
        hover:text-gray-900 dark:hover:text-white 
        after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 
        hover:after:w-full hover:scale-110 
        ${isActive ? "font-bold text-cyan-600 dark:text-red-500 after:w-full scale-110" : ""}`}
                        >
                            {item}
                        </a>
                    )
                })}

                {/* Theme Toggle Button */}
                <button onClick={toggleTheme}
                        className="p-2 rounded-full dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {theme === "dark" ? (
                        <Moon size={20} className="text-white"/>
                    ) : (
                        <Sun size={20} className="text-gray-800"/>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center space-x-4 md:hidden">
                {/* Theme Toggle Button (Mobile) */}
                <button onClick={toggleTheme}
                        className="p-2 rounded-full dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {theme === "dark" ? (
                        <Moon size={20} className="text-white"/>
                    ) : (
                        <Sun size={20} className="text-yellow-400"/>
                    )}
                </button>

                {/* Hamburger Menu (Mobile) */}
                <div className="w-7 h-6 flex flex-col justify-between cursor-pointer z-50 relative"
                     onClick={() => setMenuOpen(!menuOpen)}>
                    <span
                        className={`block h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 absolute ${
                            menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                        }`}>
                    </span>
                    <span
                        className={`block h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${
                            menuOpen ? "opacity-0" : "opacity-100"
                        }`}>
                </span>
                    <span
                        className={`block h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 absolute ${
                            menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                        }`}>
                </span>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{x: "100%"}}
                animate={{x: menuOpen ? 0 : "100%"}}
                transition={{duration: 0.3}}
                className="fixed top-0 right-0 h-screen w-2/3 bg-white/95 dark:bg-black/95 text-gray-800 dark:text-white flex flex-col items-center justify-center space-y-6 text-lg md:hidden"
            >
                {navLinks.map((item, index) => {
                    const sectionId = item.toLowerCase()
                    const isActive = activeSection === sectionId

                    return (
                        <a key={index}
                           href={`${sectionId}`}
                           onClick={(e) => {
                               e.preventDefault()
                               scrollToSection(sectionId)
                               setMenuOpen(false)
                           }}
                           className={`relative text-gray-600 dark:text-gray-300 transition-all hover:text-gray-900 dark:hover:text-white after:content-[''] 
                            after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300
                            hover:after:w-full hover:scale-110 ${
                               isActive ? "text-blue-600 dark:text-red-500 after:w-full font-bold scale-110" : ""
                           }`}>
                            {item}
                        </a>
                    )
                })}
            </motion.div>
        </motion.nav>
    )
}