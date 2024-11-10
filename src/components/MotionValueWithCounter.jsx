import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
const MotionValueWithCounter = () => {
    const count = useMotionValue(0);
    const roundedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, {
            duration: 2,
            ease: "easeInOut",
        });
        return () => {
            animation.stop();
        };
    }, [count]);
    return (
        <motion.div
            exit={{
                opacity: 0,
                scale: 0,
                x: "-100vw",
                transition: { duration: 2, ease: "easeInOut" },
            }}>
            <motion.div
                exit={{
                    x: "-100vw",
                    transition: { duration: 2, ease: "easeInOut" },
                }}
                className='text-3xl flex flex-col justify-center items-center text-white bg-teal-500 h-[300px] w-[300px] rounded font-semibold'>
                <motion.h1>{roundedValue}</motion.h1> <h1>+ Projects</h1>
            </motion.div>
        </motion.div>
    );
};

export default MotionValueWithCounter;
