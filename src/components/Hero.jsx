import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative z-10 text-white px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex justify-center"
    >
      <div className="bg-black/10 backdrop-blur-sm p-4 sm:p-6 md:p-10 text-center rounded-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl">
        {/* Hello, I'm */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-medium"
        >
          Hello, I'm
        </motion.h2>

        {/* Name typing animation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mt-2"
        >
          <TypeAnimation
            sequence={[300, "TANMAY HALDAR"]}
            wrapper="span"
            speed={60}
            cursor={true}
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-4 text-base text-sm sm:text-lg md:text-xl text-gray-200"
        >
          I'm a passionate Full-Stack Developer focused on building scalable web applications and delightful user experiences.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex justify-center gap-6 mt-8 text-xl sm:text-2xl"
        >
          <a
            href="https://linkedin.com/in/tanmay-haldar0"
            className="hover:text-blue-400 transition duration-300"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tanmay-haldar0"
            className="hover:text-green-400 transition duration-300"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
