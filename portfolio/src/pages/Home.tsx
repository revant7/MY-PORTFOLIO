// import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                {/* Animated Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-6xl md:text-7xl font-extrabold text-white text-center relative z-10"
                >
                    Welcome to{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                        My Portfolio
                    </span>
                </motion.h1>

                {/* Subtext Animation */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-xl md:text-2xl text-gray-300 text-center relative z-10"
                >
                    Hi, I am <span className="text-pink-400 font-semibold">Revant Khanna</span>, a passionate developer and innovator 🚀.
                </motion.p>
            </div>
        </div>
    );
}

export default Home;
