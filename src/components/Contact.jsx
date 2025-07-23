import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative z-10 text-white px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex justify-center"
    >
      <div className="bg-black/10 backdrop-blur-sm p-4 sm:p-6 md:p-10 text-left rounded-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl h-[80vh] overflow-y-auto custom-scrollbar">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-center mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 mb-6 text-sm sm:text-base"
        >
          Whether you want to collaborate, have a project idea, or just say hello — my inbox is always open. I’ll try my best to get back to you!
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
