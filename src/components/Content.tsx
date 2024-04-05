import Spline from "@splinetool/react-spline";
import TextSwitcher from "./TextSwitcher";

export default function Phone() {
  return (
    <div className="flex flex-row w-screen h-screen gradient-background">
      <div className="text-white absolute bottom-72 left-48 w-1/4 pointer-events-none">
        <TextSwitcher />
        <div className="text-lg font-poppins">
          The Moon is Earth's only natural satellite. It orbits at an average
          distance of 384,400 km, about 30 times the diameter of Earth.
        </div>
        <div>Learn More</div>
      </div>
      <Spline scene="https://prod.spline.design/lAEEcfuMEorrJ2T9/scene.splinecode"></Spline>
    </div>
  );
}
