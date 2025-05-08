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
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">About Me</h2>
          <div className="w-24 h-1 bg-neutral-900 dark:bg-white mx-auto"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I'm a motivated and curious developer with a strong interest in creating powerful, user-focused applications.
              I enjoy working with technologies like Python, Java, and Next.js, and I'm especially passionate about app development and cybersecurity.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              My tech journey began with a drive to build useful tools — today, I continue that journey by combining creativity, clean code, and problem-solving skills.
              In my free time, you'll often find me at the gym with friends, working on side projects, or exploring the roads on my motorcycle.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I love learning, building, and sharing — and I’m always looking for ways to grow, both personally and professionally.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: "Python", value: "90%" },
              { title: "Java", value: "85%" },
              { title: "NextJS", value: "95%" },
              { title: "Teamwork", value: "88%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{skill.title}</h3>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: skill.value } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2.5 rounded-full bg-neutral-900 dark:bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;