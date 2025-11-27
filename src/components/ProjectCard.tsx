import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function ProjectCard({
  images,
  title,
  description,
  gitlink,
  cardID,
}: {
  images: string[];
  title: string;
  description: string;
  gitlink: string;
  cardID: number;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showExtendedContent, setShowExtendedContent] =
    useState<boolean>(false);

  const imagesRef = useRef<HTMLDivElement>(null);
  let moveTo = "";
  if (window.outerWidth > 1100) {
    if (cardID % 3 === 0) {
      moveTo = "sm:-left-[calc(420px)]";
    } else if (cardID % 2 === 0) {
      moveTo = "";
    } else {
      moveTo = "sm:left-[calc(420px)]";
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowExtendedContent(!showExtendedContent);
    }, 300);
  }, [showModal]);

  return (
    <div
      onClick={() => {
        setShowModal(!showModal);
      }}
      className="sm:w-[407px] w-[300px] h-full bg-white rounded-2xl border-2 projectCart"
    >
      <div
        className={`flex flex-col relative left-0 right-0 transition-all duration-1000 h-full w-fit gap-3 p-5 bg-white rounded-2xl  ${
          showModal
            ? `z-20 border-2 projectCart ${moveTo} scale-130`
            : `scale-100`
        }`}
      >
        <div className={` overflow-hidden shadow-xl flex`}>
          <div
            className={`h-full ${
              showExtendedContent ? "left-10" : "left-0"
            } relative text-3xl flex transition-discrete duration-300  items-center z-10`}
            onClick={(e) => {
              e.stopPropagation();
              imagesRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <BiLeftArrow className="bg-gray-200 rounded-2xl" />
          </div>
          <div
            className="hover:scale-105 relative z-20 lg:max-w-[303px] flex overflow-clip transition-transform"
            ref={imagesRef}
          >
            {images.map((el) => {
              return <img src={import.meta.env.BASE_URL + el} alt="" />;
            })}
            <div className="absolute cursor-pointer bottom-0 w-full h-full bg-gradient-to-t from-white from-0 to-40% to-transparent"></div>
          </div>
          <div
            className={`h-full ${
              showExtendedContent ? "right-10" : "right-0"
            } relative text-3xl flex transition-discrete duration-300 z-10 items-center`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BiRightArrow className="bg-gray-200 rounded-2xl" />
          </div>
        </div>
        <div className="w-full text-wrap wrap-anywhere">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="w-full text-left whitespace-pre-line">{description}</p>
        </div>
        <div className="flex-1 flex items-end pl-2">
          <a href={gitlink}>
            <AnimatePresence>
              <motion.div
                layout
                className="flex border border-gray-400 rounded-2xl p-1 bg-gray-200 items-center gap-3"
              >
                {!showExtendedContent ? (
                  <>
                    <p>Open GitHub Repository</p>
                    <img
                      src={import.meta.env.BASE_URL + "/github-mark.png"}
                      alt=""
                      className="w-7 h-7"
                    />
                  </>
                ) : (
                  <img
                    src={import.meta.env.BASE_URL + "/github-mark.png"}
                    alt=""
                    className="w-10 h-10"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </a>
        </div>
      </div>
    </div>
  );
}
