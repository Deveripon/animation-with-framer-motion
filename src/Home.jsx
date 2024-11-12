// vebechilam hoyto home component load korechi bole home er sokol kichu load hoye jacce, tai copy kore app a niye giyechi

import React, { Suspense, useState } from "react";

const Home = () => {
    const [componentToShow, setComponentToShow] = useState(null);

    //dynamic components importer
    async function importComponent(componentName) {
        const Component = await React.lazy(() =>
            import(`./components/${componentName}`)
        );
        return <Component />;
    }

    //component selector
    async function selectComponent(componentName) {
        const Component = await importComponent(componentName);
        setComponentToShow(Component);
    }

    return (
        <div className='navdiv'>
            <div>
                <ul className='flex flex-col'>
                    <li className='flex flex-col gap-6'>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("Simple")}>
                            Simple Animation{" "}
                        </button>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("Variants")}>
                            Variants
                        </button>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() =>
                                selectComponent("MotionValueWithCounter")
                            }>
                            Motion Value with Counter
                        </button>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("Keyframe")}>
                            Keyframes of Animation
                        </button>{" "}
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("AnimatedText")}>
                            Animated Text
                        </button>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("AnimatedButton")}>
                            Animated Button
                        </button>
                        <button
                            className='underline text-xl text-gray-600'
                            onClick={() => selectComponent("ScrollReveal")}>
                            Scroll Animation
                        </button>
                    </li>
                </ul>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                {componentToShow}
            </Suspense>
        </div>
    );
};

export default Home;
