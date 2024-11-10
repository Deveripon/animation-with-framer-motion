import { motion } from "framer-motion";
const TransitionType = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0, delay: 0.5 }}
                transition={{ duration: 1, type: "spring" }}
                className='text-xl mt-5'>
                <h1>Learning Framer Motion</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem repellendus, eum facere officiis rem quia
                    cupiditate. Et nobis aperiam sint.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0, delay: 0.5 }}
                transition={{ duration: 1, type: "spring", bounce: 0.25 }}
                className='text-xl mt-5'>
                <h1>Learning Framer Motion</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem repellendus, eum facere officiis rem quia
                    cupiditate. Et nobis aperiam sint.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0, delay: 0.5 }}
                transition={{ duration: 1, type: "spring" }}
                className='text-xl mt-5'>
                <h1>Learning Framer Motion</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem repellendus, eum facere officiis rem quia
                    cupiditate. Et nobis aperiam sint.
                </p>
            </motion.div>
        </>
    );
};

export default TransitionType;
