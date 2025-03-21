import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { id: 1, title: "Project One", description: "Description for project one" },
    { id: 2, title: "Project Two", description: "Description for project two" },
  ];

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-700 rounded-xl"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
