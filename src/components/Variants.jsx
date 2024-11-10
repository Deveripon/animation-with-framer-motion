import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        scale: 0.5,
        y: "-100vh",
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: 1, duration: 2, type: "spring" },
    },
};

const childVariants = {
    initial: {
        opacity: 0,
        scale: 0.5,
        x: "-100vw",
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay: 1, duration: 2, type: "spring" },
    },
};
const Variants = () => {
    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            className='bg-teal-500 h-[200px] w-[200px] rounded '>
            <motion.div
                variants={childVariants}
                className='bg-gray-500 h-[100px] w-[100px] rounded-full '></motion.div>
        </motion.div>
    );
};

export default Variants;
