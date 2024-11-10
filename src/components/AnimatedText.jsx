import { motion } from "framer-motion";
const AnimatedText = () => {
    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum eum placeat";
    const arr = text.split(" ");
    return (
        <div className='text flex gap-3 flex-wrap'>
            {arr.map((char, i) => (
                <motion.h1
                    animate={{
                        opacity: [0, 1],
                        transition: { duration: 1, delay: i / 20 },
                    }}
                    key={i}
                    className='text-4xl font-semibold'>
                    {char}{" "}
                </motion.h1>
            ))}
        </div>
    );
};

export default AnimatedText;
