import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul className='flex flex-col'>
                <li className='flex flex-col gap-6'>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/simple'>
                        Simple Animation{" "}
                    </Link>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/variants'>
                        Variants
                    </Link>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/motionvalue'>
                        Motion Value with Counter
                    </Link>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/keyframes'>
                        Keyframes of Animation
                    </Link>{" "}
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/animatedtext'>
                        Animated Text
                    </Link>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/animatedbutton'>
                        Animated Button
                    </Link>
                    <Link
                        className='underline text-xl text-gray-600'
                        to='/scroll'>
                        Scroll Animation
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
