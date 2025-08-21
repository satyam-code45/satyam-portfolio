import {motion } from "motion/react"

const Card = ({ style, text, image, containerRef }) => {
    const baseImageClass = "absolute w-6 sm:w-8 md:w-12 cursor-grab transition-transform";
    const baseTextClass = "absolute px-2 py-1 sm:py-2 md:py-4 text-xs sm:text-sm md:text-xl text-center rounded-full ring-1 ring-gray-700/50 font-extralight bg-storm/90 backdrop-blur-sm w-[6rem] sm:w-[8rem] md:w-[12rem] cursor-grab transition-transform";

    return image && !text ? (
        <motion.img 
            src={image} 
            className={baseImageClass}
            style={{
                ...style,
                transform: `scale(${window.innerWidth < 640 ? 0.8 : 1}) rotate(${style.rotate || 0}deg)`,
            }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        />) : (
        <motion.div 
            className={baseTextClass}
            style={{
                ...style,
                transform: `scale(${window.innerWidth < 640 ? 0.8 : 1}) rotate(${style.rotate || 0}deg)`,
            }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
            {text}
        </motion.div>
    )
}

export default Card