import { motion } from "framer-motion";

const AnimatedButton = () => {
    return (
        <div className=' flex '>
            <motion.button
                className='bg-teal-500 text-white px-5 py-2 rounded-lg'
                whileTap={{ scale: 0.95, backgroundColor: "thistle" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}>
                Tap Me
            </motion.button>
            <motion.button
                className='bg-teal-500 text-white px-5 py-2 rounded-lg'
                whileTap={{ scale: 0.95, backgroundColor: "thistle" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1, yoyo: Infinity }}>
                Tap Me
            </motion.button>
        </div>
    );
};

export default AnimatedButton;
