import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Simple from "./components/Simple.jsx";
import Variants from "./components/Variants.jsx";
import MotionValueWithCounter from "./components/MotionValueWithCounter.jsx";
import KeyFrame from "./components/Keyframe.jsx";
import AnimatedText from "./components/AnimatedText.jsx";
import AnimatedButton from "./components/AnimatedButton.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route
                        path='*'
                        element={<h1>Not Found</h1>}
                    />
                    <Route element={<h1>Error Found</h1>} />
                    <Route
                        path='/'
                        element={<App />}
                    />
                    <Route
                        path='/simple'
                        element={<Simple />}
                    />{" "}
                    <Route
                        path='/variants'
                        element={<Variants />}
                    />{" "}
                    <Route
                        path='/motionvalue'
                        element={<MotionValueWithCounter />}
                    />{" "}
                    <Route
                        path='/keyframes'
                        element={<KeyFrame />}
                    />
                    <Route
                        path='/animatedtext'
                        element={<AnimatedText />}
                    />
                    <Route
                        path='/animatedbutton'
                        element={<AnimatedButton />}
                    />
                    <Route
                        path='/scroll'
                        element={<ScrollReveal />}
                    />
                </Routes>
            </AnimatePresence>
        </Router>
    </StrictMode>
);
