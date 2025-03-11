import {RevealOnScroll} from "../RevealOnScroll"
import {useEffect, useState} from "react"
import Logo from "../../assets/logo2_bg.png";
import {motion, useAnimation, useAnimationControls, type Variants} from "framer-motion";
import {ChevronDown} from "lucide-react";


const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        })
    }
}
export const Home = () => {
    const controls = useAnimation()

    // Subtle floating animation for logo
    useEffect(() => {
        controls.start({
            y: [0, -8, 0],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
            },
        })
    }, [controls])

    const logoVariants = {
        hover: {rotate: [0, -7, 5, -7, 0], transition: {duration: 0.5}},
    };

    const buttonVariants = {
        hover: {
            scale: 1.10,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
        },
        tap: {scale: 0.95},
    };

    const titleControls = useAnimationControls()
    const freelancerControls = useAnimationControls()
    const designerControls = useAnimationControls()

    // Job titles that will cycle with typing effect
    const jobTitles = ["IT Specialist", "UI Designer", "Frontend Expert", "React Specialist", "Database Management"]
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [displayedTitle, setDisplayedTitle] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)

    // Typing effect for job titles
    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100
        const currentTitle = jobTitles[currentTitleIndex]

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1))

                if (displayedTitle.length === currentTitle.length) {
                    // Wait before starting to delete
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1))

                if (displayedTitle.length === 0) {
                    setIsDeleting(false)
                    setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length)
                    setLoopNum(loopNum + 1)
                }
            }
        }, typeSpeed)

        return () => clearTimeout(timer)
    }, [displayedTitle, isDeleting, currentTitleIndex, loopNum])

    // Orchestrate staggered animations
    useEffect(() => {
        const sequence = async () => {
            await freelancerControls.start("animate")
            await titleControls.start("animate")
            await designerControls.start("animate")

            // Repeat the sequence with different timing
            setTimeout(() => {
                freelancerControls.start("pulse")
                setTimeout(() => titleControls.start("pulse"), 400)
                setTimeout(() => designerControls.start("pulse"), 800)
            }, 9000)
        }

        sequence()

        // Set up interval for repeating the 3D effect sequence
        const interval = setInterval(() => {
            freelancerControls.start("rotate")
            setTimeout(() => titleControls.start("rotate"), 300)
            setTimeout(() => designerControls.start("rotate"), 600)
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    // Text animation variants
    const textVariants: Variants = {
        initial: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        pulse: {
            scale: [1, 1.05, 1],
            filter: [
                "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                "drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))",
                "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
            ],
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
        rotate: {
            rotateX: [0, 15, 0, -15, 0],
            rotateY: [0, -15, 0, 15, 0],
            transition: {
                duration: 3,
                ease: "easeInOut",
            },
        },
    }

    // Letter animation for staggered effect
    const letterVariants: Variants = {
        initial: {opacity: 0, y: 20},
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    }

    // Split text into individual letters for animation
    const renderLetters = (text: string, custom = false) => {
        return text.split("").map((letter, i) => (
            <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className={custom ? "inline-block" : ""}
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))
    }

    return (
        <RevealOnScroll>
            <div
                className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 overflow-hidden">

                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />

                {/* Main content */}
                <div
                    className="relative container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
                    {/* Logo with continuous pulse effect */}
                    <div className="relative mb-8">
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(59, 130, 246, 0)",
                                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                                    "0 0 0 0 rgba(59, 130, 246, 0)",
                                ],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                            }}
                            className="absolute inset-0 rounded-3xl"
                        />
                        <motion.div animate={controls} className="relative">
                            <motion.img
                                src={Logo}
                                alt="logo"
                                className="bg-white rounded-3xl w-110 h-90 mx-auto shadow-lg hover:shadow-2xl transition-all"
                                variants={logoVariants}
                                whileHover="hover"
                            />
                        </motion.div>
                    </div>

                    {/* Title with gradient text */}
                    <div className="relative perspective-[1000px] px-6 py-10">
                        {/* Background glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-300/20 rounded-xl blur-xl"
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                                scale: [0.95, 1.05, 0.95],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="relative">
                            <motion.h2
                                className="text-sm sm:text-3xl font-extrabold tracking-wide leading-tight flex flex-wrap justify-center"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Freelancer text with 3D effect */}
                                <motion.span
                                    className="text-gray-900 dark:text-white mr-2 inline-block"
                                    initial="initial"
                                    animate={freelancerControls}
                                    variants={textVariants}
                                    style={{transformStyle: "preserve-3d"}}
                                >
                                    {renderLetters("Freelance")}
                                </motion.span>

                                {/* Job title with typing effect and gradient */}
                                <motion.span
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 mx-2 relative inline-block"
                                    initial="initial"
                                    animate={titleControls}
                                    variants={textVariants}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        backgroundSize: "200% auto",
                                    }}
                                >
                                    <motion.span
                                        animate={{
                                            backgroundPosition: ["0% center", "200% center"],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 dark:from-blue-400 dark:via-purple-300 dark:to-blue-400 inline-block"
                                    >
                                        - {displayedTitle}
                                        <motion.span
                                            animate={{opacity: [0, 1, 0]}}
                                            transition={{duration: 0.8, repeat: Number.POSITIVE_INFINITY}}
                                            className="inline-block ml-1"
                                        >
                                            |
                                        </motion.span>
                                    </motion.span>

                                    {/* Floating particles around the job title */}
                                    {Array.from({length: 8}).map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="absolute inline-block w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-300"
                                            style={{
                                                top: `${Math.random() * 100}%`,
                                                left: `${Math.random() * 100}%`,
                                            }}
                                            animate={{
                                                y: [0, -15, 0],
                                                x: [0, Math.random() * 10 - 5, 0],
                                                opacity: [0, 0.8, 0],
                                                scale: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 2 + Math.random() * 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: Math.random() * 2,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </motion.span>

                                {/* Web Designer text with 3D effect */}
                                <motion.span
                                    className="text-gray-900 dark:text-white ml-2 inline-block"
                                    initial="initial"
                                    animate={designerControls}
                                    variants={textVariants}
                                    style={{transformStyle: "preserve-3d"}}
                                >
                                    {renderLetters("- Web Developer")}
                                </motion.span>
                            </motion.h2>

                            {/* Animated underline */}
                            <motion.div
                                className="h-1 bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 rounded-full mt-2 mx-auto"
                                initial={{width: "0%"}}
                                animate={{
                                    width: ["0%", "100%", "0%"],
                                    x: ["0%", "0%", "100%"],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>

                    {/* Buttons with enhanced animations */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
                        {/* View Projects Button */}
                        <motion.a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("projects");
                            }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-8 rounded-lg font-medium transition-all shadow-md hover:cursor-pointer"
                        >
                            View Projects
                        </motion.a>

                        {/* Contact Me Button */}
                        <motion.a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="relative border-2 border-blue-600/50 dark:border-blue-500/50 text-blue-600 dark:text-blue-400 py-3 px-8 rounded-lg font-medium transition-all hover:bg-blue-50 dark:hover:bg-blue-800/20 shadow-sm hover:cursor-pointer"
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                    >
                        <ChevronDown className="h-8 w-8 text-blue-600 dark:text-blue-400"/>
                    </motion.div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

