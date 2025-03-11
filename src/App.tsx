import {useState, useEffect} from "react"
import "./index.css"
import {LoadingScreen} from "./components/LoadingScreen"
import {Navbar} from "./components/Navbar"
import {Home} from "./components/sections/Home"
import {About} from "./components/sections/About"
import {Projects} from "./components/sections/Projects"
import {Contact} from "./components/sections/Contact"
import {Services} from "./components/sections/Services"
import {ThemeProvider} from "./components/ThemeContext"

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    // Handle scroll and update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            const scrollPosition = window.scrollY + 200

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight
                const sectionId = section.getAttribute("id") || ""

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId)
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <ThemeProvider>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } bg-gray-200 dark:bg-black text-gray-800 dark:text-gray-100`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection}/>
                <main>
                    <section id="home">
                        <Home/>
                    </section>
                    <section id="about">
                        <About/>
                    </section>
                    <section id="services">
                        <Services/>
                    </section>
                    <section id="projects">
                        <Projects/>
                    </section>
                    <section id="contact">
                        <Contact/>
                    </section>
                </main>
            </div>
        </ThemeProvider>
    )
}

