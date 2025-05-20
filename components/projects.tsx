'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Calender Project",
    description: "It's my first project in Next.js. It's a calender that shows the current month and the days of the week. You can click on a day to see the events of that day.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    githubUrl: "https://github.com/im23b-terenzianie/calenderproject",
    liveUrl: "https://kalenderproject-f558gmiio-enzo-terenzianis-projects.vercel.app"
  },
  {
    title: "Tank Game Bots",
    description: "With this project I started to learn Java. It's a project with multiple bots that play against each other in a tank game.",
    technologies: ["Java", "JavaFX", "Maven", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/Panzer_team_siege",
  },
  {
    title: "Cyberattacks Website",
    description: "This is a website that shows the different types of cyberattacks in Ukraine and how to protect yourself from them.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/projekt_cyberattacks",
    liveUrl: "https://im23b-terenzianie.github.io/projekt_cyberattacks/main/index.html"
  },
  {
    title: "React Testshop",
    description: "This is a testshop made with React. It's a simple shop that shows the products and allows you to add them to the cart. I created it to learn React.",
    technologies: ["React", "Tailwind CSS", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/learning_react"
  },
  {
    title: "Creatine App",
    description: "This is a simple app that remindes me daily to take my creatine. It works with expo go because I'm still working on it to get it in the play store.",
    technologies: ["React", "Tailwind CSS", "Typescript", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/creatineapp",
  },
  {
    title: "RetroPie",
    description: "This is a project that I did to learn how to use a Raspberry Pi. I flashed the RetroPie image on the SD card and set it up to play games. I also created a automated file system to organize the games.",
    technologies: ["Raspberry Pi", "RetroPie", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/retropie-project",
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 py-32 px-4"
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-neutral-900 dark:bg-white mx-auto"></div>
          </motion.div>

          <div className="relative overflow-visible">
            <div ref={carouselRef} className="relative h-auto min-h-[500px] w-full">
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full"
              >
                <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-10 md:p-16 lg:p-20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-16 md:gap-20 lg:gap-24 items-center">
                    <div className="space-y-6 w-full md:w-1/2">
                      <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-lg text-neutral-700 dark:text-neutral-300">
                        {projects[currentIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={() => window.open(projects[currentIndex].githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                          View Source
                        </Button>
                        {projects[currentIndex].liveUrl && (
                          <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => window.open(projects[currentIndex].liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-700 aspect-video w-full md:w-1/2 min-h-[300px]">
                      {projects[currentIndex].image ? (
                        <img
                          src={projects[currentIndex].image}
                          alt={projects[currentIndex].title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          No preview available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <Button
              variant="ghost"
              className="absolute left-[-4rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-700 shadow-lg border border-neutral-200 dark:border-neutral-700 z-10"
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
            </Button>

            <Button
              variant="ghost"
              className="absolute right-[-4rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-700 shadow-lg border border-neutral-200 dark:border-neutral-700 z-10"
              onClick={() => paginate(1)}
              disabled={currentIndex === projects.length - 1}
            >
              <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
            </Button>

            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                    ? 'bg-neutral-900 dark:bg-white'
                    : 'bg-neutral-300 dark:bg-neutral-700'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;