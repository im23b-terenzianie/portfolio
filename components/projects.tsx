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
  status: 'finished' | 'in-progress' | 'paused';
}

const projects: Project[] = [
  {
    title: "Tank Game Bots",
    description: "With this project I started to learn Java. It's a project with multiple bots that play against each other in a tank game.",
    technologies: ["Java", "JavaFX", "Maven", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/Panzer_team_siege",
    status: 'finished',
  },
  {
    title: "Cyberattacks Website",
    description: "This is a website that shows the different types of cyberattacks in Ukraine and how to protect yourself from them.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/projekt_cyberattacks",
    liveUrl: "https://im23b-terenzianie.github.io/projekt_cyberattacks/main/index.html",
    status: 'finished',
  },
  {
    title: "React Testshop",
    description: "This is a testshop made with React. It's a simple shop that shows the products and allows you to add them to the cart. I created it to learn React.",
    technologies: ["React", "Tailwind CSS", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/learning_react",
    status: 'finished',
  },
  {
    title: "Creatine App",
    description: "This is a simple app that remindes me daily to take my creatine. It works with expo go because I'm still working on it to get it in the play store.",
    technologies: ["React", "Tailwind CSS", "Typescript", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/creatineapp",
    status: 'in-progress',
  },
  {
    title: "RetroPie",
    description: "This is a project that I did to learn how to use a Raspberry Pi. I flashed the RetroPie image on the SD card and set it up to play games. I also created a automated file system to organize the games.",
    technologies: ["Python", "Raspberry Pi", "RetroPie", "Git"],
    githubUrl: "https://github.com/im23b-terenzianie/retropie-project",
    status: 'in-progress',
  },
  {
    title: "Calender Project",
    description: "It's my first project in Next.js. It's a calender that shows the current month and the days of the week. You can click on a day to see the events of that day.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    githubUrl: "https://github.com/im23b-terenzianie/calenderproject",
    status: 'paused',
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
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
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 py-32 px-4 overflow-x-hidden"
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
                custom={direction}
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
                <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-4 md:p-10 lg:p-20 backdrop-blur-sm">
                  <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-20 lg:gap-24 items-center">
                    <div className="space-y-3 md:space-y-6 w-full md:w-1/2">
                      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                        <h3 className="text-xl md:text-3xl font-bold text-neutral-900 dark:text-white text-center md:text-left">
                          {projects[currentIndex].title}
                        </h3>
                        {projects[currentIndex].status === 'finished' && (
                          <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-semibold">
                            Finished
                          </span>
                        )}
                        {projects[currentIndex].status === 'in-progress' && (
                          <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 font-semibold">
                            In Progress
                          </span>
                        )}
                        {projects[currentIndex].status === 'paused' && (
                          <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 font-semibold">
                            Paused
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-lg text-neutral-700 dark:text-neutral-300 text-center md:text-left">
                        {projects[currentIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {projects[currentIndex].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs md:text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start w-full">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 w-full md:w-auto justify-center"
                          onClick={() => window.open(projects[currentIndex].githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                          View Source
                        </Button>
                        {projects[currentIndex].liveUrl && (
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 w-full md:w-auto justify-center"
                            onClick={() => window.open(projects[currentIndex].liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-700 aspect-video w-full md:w-1/2 min-h-[160px] md:min-h-[300px] mb-4 md:mb-0">
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

            <div className="flex justify-center mt-8 gap-2 items-center">
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
              </Button>
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
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;