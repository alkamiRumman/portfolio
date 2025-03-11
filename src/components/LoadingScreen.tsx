import {useEffect, useState} from "react"
import {motion, AnimatePresence} from "framer-motion"

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("")
    const [showBar, setShowBar] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    const fullText = "Rumman IT Solution"

    useEffect(() => {
        // Text typing animation
        let index = 0
        const typingInterval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++

            if (index > fullText.length) {
                clearInterval(typingInterval)
                setShowBar(true)

                // Start progress bar animation
                let progressValue = 0
                const progressInterval = setInterval(() => {
                    progressValue += 1
                    setProgress(progressValue)

                    if (progressValue >= 100) {
                        clearInterval(progressInterval)
                        setIsComplete(true)

                        setTimeout(() => {
                            onComplete()
                        }, 500)
                    }
                }, 20)
            }
        }, 100)

        return () => {
            clearInterval(typingInterval)
        }
    }, [onComplete])

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-gray-300 dark:bg-black flex flex-col items-center justify-center"
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                <div className="relative">
                    <motion.div
                        className="mb-8 text-4xl md:text-5xl font-mono font-bold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <span className="text-black dark:text-white">{text.split(" ").slice(0, -1).join(" ")}</span>
                        {text.includes(" ") && <span className="text-blue-500"> {text.split(" ").pop()}</span>}
                        <motion.span
                            className="inline-block w-0.5 h-8 ml-1 bg-blue-500"
                            animate={{
                                opacity: isComplete ? 0 : [1, 0, 1],
                                height: isComplete ? 0 : "2rem",
                            }}
                            transition={{
                                opacity: {repeat: Number.POSITIVE_INFINITY, duration: 0.8},
                                height: {duration: 0.3},
                            }}
                        />
                    </motion.div>

                    {showBar && (
                        <motion.div
                            className="w-[340px] md:w-[350px] h-[3px] bg-gray-800 rounded-full overflow-hidden"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full"
                                initial={{width: "0%"}}
                                animate={{width: `${progress}%`}}
                                transition={{ease: "easeInOut"}}
                                style={{
                                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
                                }}
                            />
                        </motion.div>
                    )}

                    {showBar && (
                        <motion.div
                            className="mt-4 text-black dark:text-gray-400 text-sm font-mono"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                        >
                            {isComplete ? (
                                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} className="text-blue-400">
                                    Ready to launch
                                </motion.span>
                            ) : (
                                <span>Loading... {progress}%</span>
                            )}
                        </motion.div>
                    )}
                </div>

                {/* Background elements for visual interest */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-blue-500/10"
                                style={{
                                    width: `${Math.random() * 300 + 50}px`,
                                    height: `${Math.random() * 300 + 50}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: [0, 0.2, 0],
                                    scale: [0, 1, 1.5],
                                    x: Math.random() * 100 - 50,
                                    y: Math.random() * 100 - 50,
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 5,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

