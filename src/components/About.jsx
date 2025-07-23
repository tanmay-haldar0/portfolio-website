import { motion } from "framer-motion";

export default function About() {
    return (
        <div
            id="about"
            className="relative z-10 text-white px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex justify-center"
        >
            <div className="custom-scrollbar bg-black/10 backdrop-blur-sm p-4 sm:p-6 md:p-10 text-left rounded-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl h-[80vh] overflow-y-auto">


                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-center mb-6"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-gray-300 text-sm sm:text-lg mb-6"
                >
                    I'm <span className="font-semibold text-white">Tanmay Haldar</span>, an aspiring Software Developer currently pursuing BCA at MAKAUT. I'm passionate about clean code, intuitive UI/UX, and continuous learning. I specialize in building responsive web and mobile applications using technologies like React.js, React Native, and the MERN stack.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="space-y-4 text-sm sm:text-base"
                >
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">🎯 Objective</h3>
                        <p className="text-gray-400">
                            Seeking an opportunity to contribute to impactful projects in a dynamic tech environment where I can apply my skills in React and mobile development while continuing to grow as a full-stack developer.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">📚 Education</h3>
                        <p className="text-gray-400">
                            <strong>Bachelor of Computer Application (BCA)</strong><br />
                            Maulana Abul Kalam Azad University of Technology, West Bengal<br />
                            Aug 2023 – July 2027
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">💻 Skills</h3>
                        <p className="text-gray-400">
                            React JS, React Native, HTML, CSS, JavaScript, Python, MERN Stack
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">🛠 Tools & Tech</h3>
                        <p className="text-gray-400">
                            VS Code, Git & GitHub
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">📌 Interests</h3>
                        <p className="text-gray-400">Travelling, Books</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
