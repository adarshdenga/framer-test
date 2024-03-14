import { motion } from "framer-motion";
import pica from "../assets/stockimages/pica.png";
import picb from "../assets/stockimages/picb.png";
import picc from "../assets/stockimages/picc.png";
import picd from "../assets/stockimages/picd.png";
import pice from "../assets/stockimages/pice.png";
import picf from "../assets/stockimages/picf.png";
import picg from "../assets/stockimages/picg.png";
import pich from "../assets/stockimages/pich.png";
import pici from "../assets/stockimages/pici.png";

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
      y: 1000,
    },
    visible: {
      y: 0,
      transition: { duration: 2, ease: [0, 0.52, 0.92, 0.31] },
    },
  };

  const imageDownVariants = {
    hidden: {
      y: -1000,
    },
    visible: {
      y: 0,
      transition: { duration: 2, ease: [0, 0.52, 0.92, 0.31] },
    },
  };

  return (
    <div className="flex flex-row gap-2 overflow-y-hidden">
      <motion.div
        className="flex flex-col w-1/3 gap-2"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          className="h-1/3 object-cover"
          src={pica}
          variants={imageUpVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={picb}
          variants={imageUpVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={picc}
          variants={imageUpVariants}
        ></motion.img>
      </motion.div>
      <motion.div
        className="flex flex-col-reverse w-1/3 gap-2"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          className="h-1/3 object-cover"
          src={picd}
          variants={imageDownVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={pice}
          variants={imageDownVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={picf}
          variants={imageDownVariants}
        ></motion.img>
      </motion.div>
      <motion.div
        className="flex flex-col w-1/3 gap-2"
        variants={columnVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          className="h-1/3 object-cover"
          src={picg}
          variants={imageUpVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={pich}
          variants={imageUpVariants}
        ></motion.img>
        <motion.img
          className="h-1/3 object-cover"
          src={pici}
          variants={imageUpVariants}
        ></motion.img>
      </motion.div>
    </div>
  );
}
