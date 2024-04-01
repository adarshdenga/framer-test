import pica from "../assets/stockimages/pica.png";
import picb from "../assets/stockimages/picb.png";
import picc from "../assets/stockimages/picc.png";
import picd from "../assets/stockimages/picd.png";
import pice from "../assets/stockimages/pice.png";
import picf from "../assets/stockimages/picf.png";
import picg from "../assets/stockimages/picg.png";
import pich from "../assets/stockimages/pich.png";
import pici from "../assets/stockimages/pici.png";
import picj from "../assets/stockimages/picj.png";
import pick from "../assets/stockimages/pick.png";
import picl from "../assets/stockimages/picl.png";
import picm from "../assets/stockimages/picm.png";
import picn from "../assets/stockimages/picn.png";
import pico from "../assets/stockimages/pico.png";
import picp from "../assets/stockimages/picp.png";
import picq from "../assets/stockimages/picq.png";
import picr from "../assets/stockimages/picr.png";
import pics from "../assets/stockimages/pics.png";
import pict from "../assets/stockimages/pict.png";
import picu from "../assets/stockimages/picu.png";
import picv from "../assets/stockimages/picv.png";
import picw from "../assets/stockimages/picw.png";
import picx from "../assets/stockimages/picx.png";
import picy from "../assets/stockimages/picy.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimationStarted(true);
  }, []);

  return (
    <div className="flex flex-row gap-10">
      {/* B - T */}
      <div className="bottomToTopCols flex flex-col-reverse w-1/5 gap-10">
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pica}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picb}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picc}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picd}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pice}
        ></img>
      </div>
      {/* T - B*/}
      <div className="topToBottomCols flex flex-col w-1/5 gap-10">
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picf}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picg}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pich}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pici}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picj}
        ></img>
      </div>
      {/* B - T */}
      <div className="bottomToTopCols flex flex-col-reverse w-1/5 gap-10">
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pick}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picl}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picm}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picn}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pico}
        ></img>
      </div>
      {/* T - B*/}
      <div className="topToBottomCols flex flex-col w-1/5 gap-10">
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picp}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picq}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picr}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pics}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={pict}
        ></img>
      </div>
      {/* B - T */}
      <div className="bottomToTopCols flex flex-col-reverse w-1/5 gap-10">
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picu}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picv}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picw}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picx}
        ></img>
        <img
          className={animationStarted ? "aspect-video object-cover" : "hidden"}
          src={picy}
        ></img>
      </div>
    </div>
  );
}
