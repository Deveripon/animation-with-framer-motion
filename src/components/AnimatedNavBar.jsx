import { motion } from "framer-motion";
const AnimatedNavBar = () => {
    return (
        <div>
            <motion.ul className='flex gap-2 mb-5'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </motion.ul>
        </div>
    );
};

export default AnimatedNavBar;
