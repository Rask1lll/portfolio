import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useInView, motion } from "framer-motion";

const projects = [
  {
    images: ["/CloudeDisc.png", "/CloudeDisc.png"],
    title: "Cloud disc",
    desc: `ClodeDisc is a modern cloud-based storage application designed to securely store, preview, and manage user files, including PDFs, images, videos, and audio. 
    The platform is built with Next.js, styled with Tailwind CSS, and uses Zustand for state management.`,
    gitLink: "https://github.com/Rask1lll/CloudDiscApp",
  },
  {
    images: ["/learning platform.png", "/learning platform.png"],
    title: "School Management System",
    desc: `The School Management System is a comprehensive web platform built for schools to organize and manage their academic and administrative workflows.  
It is developed using Next.js, styled with Tailwind CSS, and uses Zustand for fast and predictable state management.
  `,
    gitLink: "https://github.com/Rask1lll/school-management",
  },
  {
    images: ["/minilingo.jpg", "/minilingo.jpg", "/minilingo.jpg"],
    title: "Minilingo",
    desc: "MiniLingo is a full-featured web application designed to help users learn English through interactive mini-games, structured lessons, and a built-in gamification system.  The platform is built with React and uses React Router for navigation.",
    gitLink: "https://github.com/Rask1lll/miniLingo",
  },
];

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef);
  return (
    <motion.div
      className="flex justify-center"
      ref={cardsRef}
      initial={{ x: 200 }}
      animate={isInView && { x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="projectContainer p-7 rounded-4xl gap-7 w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((el, i) => {
          return (
            <ProjectCard
              title={el.title}
              images={el.images}
              description={el.desc}
              gitlink={el.gitLink}
              cardID={i + 1}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
