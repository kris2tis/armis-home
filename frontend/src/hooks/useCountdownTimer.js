"use client";

import { useEffect, useState } from "react";

export default function useCountdownTimer() {
  const [timer, setTimer] = useState({
    days: 2,
    hours: 23,
    minutes: 60,
    seconds: 60,
  });

  useEffect(() => {
    let interVall = setInterval(() => {
      if (timer.seconds > 0) {
        updateTimer("uSecond");
      } else if (timer.seconds === 0 && timer.minutes > 0) {
        updateTimer("uMinute");
      } else if (timer.seconds === 0 && timer.minutes === 0 && timer.hours) {
        updateTimer("uHour");
      } else if (
        timer.seconds === 0 &&
        timer.minutes === 0 &&
        timer.hours === 0 &&
        timer.days
      ) {
        updateTimer("uDay");
      }
    }, 1000);
    return () => clearInterval(interVall);
  });

  const updateTimer = (value) => {
    switch (value) {
      case "uSecond":
        setTimer((prev) => ({ ...prev, seconds: prev.seconds - 1 }));

        break;
      case "uMinute":
        setTimer((prev) => ({
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 5,
        }));

        break;
      case "uHour":
        setTimer((prev) => ({
          ...prev,
          hours: prev.hours - 1,
          minutes: 60,
          seconds: 60,
        }));

        break;
      case "uDay":
        setTimer((prev) => ({
          days: prev.days - 1,
          hours: 60,
          minutes: 60,
          seconds: 60,
        }));

        break;
      default:
        clearInterval(interVall);
        break;
    }
  };
  return [
    { id: 5, title: "ثانیه", value: timer.seconds },
    { id: 4, title: "دقیقه", value: timer.minutes },
    { id: 3, title: "ساعت", value: timer.hours },
    { id: 1, title: "روز", value: timer.days },
  ];
}

// اول یک عدد به میلی ثانیه گرفته میشه
//      بعد تبدیل میشه با ثانیه , دقیقه , ساعت و ...

// بعدش درون state قرار میگیره اگر بود
// و بعدش از ثانیه کل کم میشه
// فرمت به صورت ثانیه دقیقه و ساعت برمیگرده

// ایده کم کردن با switch case
