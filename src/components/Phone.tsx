import Spline from "@splinetool/react-spline";

export default function Phone() {
  return (
    <div className="flex flex-row w-screen h-screen blue-gradient">
      <div className="text-white absolute bottom-72 left-48 pointer-events-none">
        <div className="font-barlow text-6xl font-bold">RED BALLS.</div>
      </div>
      <Spline scene="https://prod.spline.design/C2x-eDCr2bTfe5S9/scene.splinecode"></Spline>
    </div>
  );
}
