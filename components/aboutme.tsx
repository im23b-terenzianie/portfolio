'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white py-12 md:py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">About Me</h2>
          <div className="w-20 md:w-24 h-1 bg-neutral-900 dark:bg-white mx-auto"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I'm a motivated and curious developer with a strong interest in creating powerful, user-focused applications.
              I enjoy working with technologies like Python, Java, and Next.js, and I'm especially passionate about app development and cybersecurity.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              My tech journey began with a drive to build useful tools — today, I continue that journey by combining creativity, clean code, and problem-solving skills.
              In my free time, you'll often find me at the gym with friends, working on side projects, or exploring the roads on my motorcycle.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I love learning, building, and sharing — and I'm always looking for ways to grow, both personally and professionally.
            </p>
          </div>

          <motion.div variants={itemVariants} className="w-full flex justify-center order-first md:order-last mb-6 md:mb-0">
            <img
              src="/images/profile.jpg"
              alt="About Me Image"
              className="w-3/4 md:w-4/5 max-w-sm object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 md:mt-12">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 w-full">
            <div className="flex flex-row justify-center md:justify-start gap-6 md:gap-4 w-full md:w-auto mb-2 md:mb-0">
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/python.png" alt="Tech 1" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/java.png" alt="Tech 2" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/nextjs.png" alt="Tech 3" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-auto">
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/HTML.png" alt="Tech 4" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/css.png" alt="Tech 5" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/js.png" alt="Tech 6" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/react.png" alt="Tech 7" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/tailwind.png" alt="Tech 8" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/nodejs.png" alt="Tech 9" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <div className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <img src="/images/Mongodb.png" alt="Tech 10" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default AboutMe;

