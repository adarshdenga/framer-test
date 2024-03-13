import { motion } from "framer-motion";

export default function First() {
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
      {/* Fade Up and Down */}
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
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
      </motion.div>

      {/* KeyFrames */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
      ></motion.div>
    </motion.div>
  );
}
