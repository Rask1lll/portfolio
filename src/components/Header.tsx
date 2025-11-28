import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <header className="text-white gap-7 flex items-center flex-col w-full">
        <img
          src={import.meta.env.BASE_URL + "/hero_setup.jpg"}
          alt=""
          className="not-md:w-2xs not-md:h-2xs"
        />
        <h1 className="text-8xl not-lg:text-6xl">
          Welcome
          <motion.span
            className="inline-block"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            !
          </motion.span>
        </h1>
        <p className="max-w-2xl not-lg:max-w-xs text-center">
          My name is Rassul Satpekov, a front-end developer based in Astana,
          Kazakhstan. I’ve worked on several small to mid-scale front-end
          projects, focusing on building clean, functional interfaces and
          improving user experience. I enjoy working with modern web
          technologies, learning new tools, and developing interfaces that are
          simple, intuitive, and visually consistent.
        </p>
      </header>
    </motion.div>
  );
}
