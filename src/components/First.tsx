import { motion, useScroll } from "framer-motion";

export default function First() {
  const { scrollYProgress: completionProgress } = useScroll();

  const pageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      className="grid grid-cols-3 p-10 gap-10"
      initial="hidden"
      animate="visible"
    >
      {/* Fade */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      >
        <motion.div
          className="w-20 h-20 bg-stone-100 rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="w-20 h-20 bg-stone-100 rounded-full"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        ></motion.div>
      </motion.div>

      {/* KeyFrames */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      >
        <motion.div
          className="w-1/3 h-1/3 shadow-md bg-rose-400"
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90, 0],
            borderRadius: ["10%", "10%", "50%", "10%"],
          }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-emerald-500 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
        >
          Click me!
        </motion.button>
      </motion.div>

      {/* Drag */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      >
        <motion.div
          className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
          drag
          dragConstraints={{ top: -125, bottom: 125, right: 125, left: -125 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        ></motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      >
        <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
          <motion.div
            className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
            style={{ scaleY: completionProgress }}
          ></motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>
    </motion.div>
  );
}
