import { useEffect, useState } from "react";

export default function TextSwitcher() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % 3);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setKey((prevkey) => prevkey + 1);
  }, [index]);

  const switchContent = () => {
    switch (index) {
      case 0:
        return (
          <>
            <span className="text-content">THE </span>
            <span className="text-content">MOON</span>
          </>
        );
      case 1:
        return (
          <>
            <span className="text-content">つ</span>
            <span className="text-content">き</span>
          </>
        );
      case 2:
        return (
          <>
            <span className="text-content">위</span>
            <span className="text-content">성</span>
          </>
        );
    }
  };

  return (
    <div
      key={key}
      className="text-content-container font-barlow text-6xl font-bold mb-10"
    >
      {switchContent()}
    </div>
  );
}
