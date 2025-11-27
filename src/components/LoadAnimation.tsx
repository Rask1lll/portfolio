import { motion } from "framer-motion";
export default function LoadAnimation() {
  return (
    <>
      <>
        <div className="w-screen h-screen bg-transparent fixed">
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 200 }}
          >
            <div className="bg-amber-100 absolute left-0 loading___left w-full h-full"></div>
          </motion.div>
          <motion.div>
            <div className="bg-amber-400 absolute left-0 loading___right w-full h-full"></div>
          </motion.div>
        </div>
      </>
    </>
  );
  return (
    <div className="flex items-center justify-center h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="">
        <circle
          fill="#3F00A9"
          stroke="#3F00A9"
          stroke-width="15"
          r="20"
          cx="35"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="35;165;165;35;35"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
        <circle
          fill="#3F00A9"
          stroke="#3F00A9"
          stroke-width="15"
          opacity=".8"
          r="20"
          cx="35"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="35;165;165;35;35"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin="0.05"
          ></animate>
        </circle>
        <circle
          fill="#3F00A9"
          stroke="#3F00A9"
          stroke-width="15"
          opacity=".6"
          r="20"
          cx="35"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="35;165;165;35;35"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".1"
          ></animate>
        </circle>
        <circle
          fill="#3F00A9"
          stroke="#3F00A9"
          stroke-width="15"
          opacity=".4"
          r="20"
          cx="35"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="35;165;165;35;35"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".15"
          ></animate>
        </circle>
        <circle
          fill="#3F00A9"
          stroke="#3F00A9"
          stroke-width="15"
          opacity=".2"
          r="20"
          cx="35"
          cy="100"
        >
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2"
            values="35;165;165;35;35"
            keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
            repeatCount="indefinite"
            begin=".2"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
