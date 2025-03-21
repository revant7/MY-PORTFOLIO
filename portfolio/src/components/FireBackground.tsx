import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import React from 'react';

const FireBackground = () => {
    const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1e1e2f",
        },
        image: "linear-gradient(135deg, #0d47a1, #3b8d99)",
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "bubble",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          bubble: {
            distance: 250,
            size: 8,
            duration: 2,
            opacity: 0.8,
          },
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.7,
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#00d4ff", "#ff4f81"],
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
          random: true,
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
    }),
    []
  );
    return (
        <div>
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        />
            
        </div>
    );
}

export default FireBackground;
