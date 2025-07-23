import { motion } from "framer-motion";

const projectList = [
  {
    title: "Ecommerce Website with MERN Stack",
    image: "https://res.cloudinary.com/dieo0zyno/image/upload/v1753263418/ecommerse_du35s8.png",
    link: "https://classiccustom-frontend.onrender.com/",
  },
  {
    title: "MERN Notes App",
    image: "/projects/todo.png",
    link: "https://your-todo-app.com",
  },
  {
    title: "Weather Dashboard",
    image: "/projects/weather.png",
    link: "https://your-weather-app.com",
  },
  // Add more as needed
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative z-10 text-white px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex justify-center"
    >
      <div className="custom-scrollbar bg-black/10 backdrop-blur-sm p-4 sm:p-6 md:p-10 text-left rounded-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-4xl h-[80vh] overflow-y-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-center mb-6"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4 border border-white/10"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 rounded-full hover:scale-105 transition"
              >
                Live Preview
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
