import { motion } from "framer-motion";

function Box({ text }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: "-200px" }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                },
            }}
            viewport={{ once: false }}
            className='box mt-[10px] bg-teal-500 text-center flex items-center justify-center text-white h-[200px]  w-[200px] rounded-md'>
            {text}
        </motion.div>
    );
}
const ScrollReveal = () => {
    const grettings = ["Hello", "World", "Framer Motion", "Animation"];
    return (
        <>
            {grettings.map((greet, i) => (
                <Box
                    key={i}
                    text={greet}
                />
            ))}
        </>
    );
};

export default ScrollReveal;
