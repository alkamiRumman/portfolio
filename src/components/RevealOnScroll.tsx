import {motion, useAnimation} from "framer-motion"
import {useEffect} from "react"
import {useInView} from "react-intersection-observer"

export const RevealOnScroll = ({children}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({threshold: 0.2})

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    const variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}},
    }

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" animate={controls}>
            {children}
        </motion.div>
    )
}

