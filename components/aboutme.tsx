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
              I'm a passionate developer with a keen eye for creating beautiful and functional web applications.
              My journey in tech started with a simple curiosity that has grown into a deep love for coding
              and problem-solving.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge with the developer community.
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