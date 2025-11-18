"use client";

import BaseImage from "@/components/ui/BaseImage";

import useCountdownTimer from "@/hooks/useCountdownTimer";

export default function AmagzingOfferTimer() {
  return (
    <div className="flex flex-col gap-y-3 bg-secondary-900 rounded-2xl pt-6 pb-2 px-5 items-center lg:w-3/12 ">
      <h2 className="text-white">پیشنهــــــادات شگفت انگیز</h2>
      <CountDownTimer />
      <div>
        <BaseImage
          src={"/assets/amagzingOfferPic.png"}
          heigth={123}
          alt={"women picture"}
          className="-mb-2 mt-9"
          imageClassName="object-center"
        />
      </div>
    </div>
  );
}

function CountDownTimer() {
  const countDownTimer = useCountdownTimer();
  return (
    <div className="flex items-center gap-x-3">
      {countDownTimer.map((t) => (
        <div
          key={t.id}
          className="flex flex-col p-2 rounded-sm bg-white-20 justify-center items-center"
        >
          <span className="text-white ">{t.value}</span>
          <span className="body-sm text-secondary-800">{t.title}</span>
        </div>
      ))}
    </div>
  );
}
