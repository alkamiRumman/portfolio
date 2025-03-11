import {createContext, useContext, useEffect, useState, type ReactNode} from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({children}: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as Theme
            if (savedTheme) {
                return savedTheme
            }

            // Check system preference
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return "dark"
            }
        }
        return "dark" // Default to dark theme
    })

    // Update the class on the html element when theme changes
    useEffect(() => {
        const root = window.document.documentElement

        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

        // Save to localStorage
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

