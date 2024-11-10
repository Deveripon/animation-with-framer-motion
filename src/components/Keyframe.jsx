import { motion } from "framer-motion";

const KeyFrame = () => {
    return (
        <div>
            <motion.div
                className='box bg-teal-500 h-[200px] w-[200px] rounded-sm'
                animate={{
                    borderRadius: ["0%", "20%", "50%", "75%", "100%", "0%"],
                    rotate: [0, 45, 180, 360, 180, 0],
                    scale: [1, 1.1, 1, 0.9, 1, 1],
                    x: [0, 50, -50, 0],
                    y: [0, 50, -50, 0],
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        delay: 1,
                        repeat: Infinity,
                    },
                }}></motion.div>
        </div>
    );
};

export default KeyFrame;
