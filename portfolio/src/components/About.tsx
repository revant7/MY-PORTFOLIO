import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-white"
    >
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 max-w-2xl text-center">
        I am a passionate developer with expertise in React, Django, and AI.
      </p>
    </motion.div>
  );
};

export default About;
