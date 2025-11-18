import { useEffect, useState } from "react";

export default function useTimer(time, isStart) {
  const [second, setSecond] = useState(() => time);

  useEffect(() => {
    let intervall;

    if (isStart) {
      intervall = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    }

    if (second === 0) {
      clearInterval(intervall);
    }

    return () => clearInterval(intervall);
  }, [second, isStart]);

  return { second };
}
