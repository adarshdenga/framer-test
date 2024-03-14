import { motion } from "framer-motion";

export default function Home() {
  const columnVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const imageUpVariants = {
    hidden: {
      y: 1500,
    },
    visible: {
      y: 0,
      transition: { duration: 3, ease: [0, 0.52, 0.92, 0.31] },
    },
  };

  const imageDownVariants = {
    hidden: {
      y: -1500,
    },
    visible: {
      y: 0,
      transition: { duration: 3, ease: [0, 0.52, 0.92, 0.31] },
    },
  };

  return (
    <div className="flex flex-row gap-10">
      {/* B - T  */}
      <motion.div
        className="flex flex-col-reverse w-1/2 gap-10"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
          transition={{ delay: 3 }}
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>
      </motion.div>

      {/* T - B  */}
      <motion.div
        className="flex flex-col w-1/2 gap-10 overflow-y-hidden "
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
          transition={{ delay: 3 }}
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>
      </motion.div>

      {/* B - T  */}
      <motion.div
        className="flex flex-col-reverse w-1/2 gap-10"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
          transition={{ delay: 3 }}
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>
      </motion.div>

      {/* T - B  */}
      <motion.div
        className="flex flex-col w-1/2 gap-10 overflow-y-hidden "
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
          transition={{ delay: 3 }}
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageUpVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>
      </motion.div>

      {/* B - T  */}
      <motion.div
        className="flex flex-col-reverse w-1/2 gap-10"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
          transition={{ delay: 3 }}
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>

        <motion.div
          variants={imageDownVariants}
          className="bg-stone-950 aspect-video rounded-lg"
        ></motion.div>
      </motion.div>
    </div>
  );
}
