"use client";

import React, { useTransition } from "react";

import {  useState } from "react";
import { TimerSelect } from "./timer_select";
import { Timer } from "./timer";

export default function Home() {
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);
  const [isSelect, setIsSelect] = useState(true);

  function handleMins(e: React.ChangeEvent<HTMLInputElement>) {
    setMins(Number(e.target.value));
  }

  function handleSecs(e: React.ChangeEvent<HTMLInputElement>) {
    setSecs(Number(e.target.value));
  }

  function handleTimer(e: React.MouseEvent<HTMLButtonElement>) {
    setIsSelect(!isSelect ? true : false);
  }


  return (
    <div className="font-mono flex flex-col items-center justify-center max-w-screen gap-4">
      <h1 className="font-bold my-6 text-2xl w-auto">POMODORO TIMER</h1>
      
      {isSelect? <TimerSelect
        mins={mins}
        secs={secs}
        handleMins={handleMins}
        handleSecs={handleSecs}
      /> : <Timer
        mins={mins}
        secs={secs}/>}
      <button
        className="bg-gray-500 rounded-3xl text-l p-2"
        onClick={handleTimer}
      >
        {isSelect ? "Start" : "Stop"}
      </button>
    </div>
  );
}
