import { motion } from "framer-motion";

const Simple = () => {
    return (
        <motion.div
            exit={{
                y: "-100vh",
                transition: { duration: 2 },
            }}>
            <motion.div
                className='box bg-teal-500 h-[200px] w-[200px] rounded-sm'
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 2, delay: 0.5 },
                }}></motion.div>
        </motion.div>
    );
};

export default Simple;
