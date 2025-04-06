import { motion } from "framer-motion";
import { forwardRef } from "react";

const Projects = forwardRef((propes, ref) => {

  const projects = [
    { id: 1, title: "Trezora - An E-Commerce Platform", description: "Description for project one" },
    { id: 2, title: "Conventus - MUN Club of NIET", description: "Description for project two" },
    { id: 2, title: "Builder's Space Community Website", description: "Description for project two" },
    { id: 2, title: "MediConnect", description: "Description for project two" },
    { id: 2, title: "My Portfolio Website", description: "Description for project two" },
    { id: 2, title: "Career Companion", description: "Description for project two" },
    { id: 2, title: "AI Chatbot", description: "Description for project two" },
    { id: 2, title: "AI Story Generator", description: "Description for project two" },
    { id: 2, title: "AI Integrated Multi-Channel Seller Portal", description: "Description for project two" },
    { id: 2, title: "ReThread - Give Your Clothes a New Life", description: "Description for project two" },
    { id: 2, title: "Edusphere", description: "Description for project two" },
    { id: 2, title: "Bank Management System", description: "Description for project two" },
  ];

  return (
    <section ref={ref}>
      <div className="min-h-screen text-white p-10">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-none rounded-xl"
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
