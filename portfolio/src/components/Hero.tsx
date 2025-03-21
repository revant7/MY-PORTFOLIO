import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#00081d",
      },
      image: "radial-gradient(circle, rgba(0,8,29,1) 0%, rgba(5,22,50,1) 60%)",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.5,
        },
      },
    },
    particles: {
      color: {
        value: ["#00d4ff", "#ff4f81", "#ffd700"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        speed: 2,
        random: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 6 },
        random: true,
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="relative w-full h-screen">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}
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

export default Hero;
