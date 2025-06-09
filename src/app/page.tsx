"use client";

import React from "react";

import { useEffect, useState } from "react";
import { TimerSelect } from "./timer_select";

export default function Home() {
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);

  function handleMins(e: React.ChangeEvent<HTMLInputElement>) {
    setMins(Number(e.target.value));
  }

  function handleSecs(e: React.ChangeEvent<HTMLInputElement>) {
    setSecs(Number(e.target.value));
  }

  return (
    <div className="font-mono flex flex-col items-center justify-center max-w-screen">
      <h1 className="font-bold my-6 text-2xl w-auto">POMODORO TIMER</h1>
      <TimerSelect
        mins={mins}
        secs={secs}
        handleMins={handleMins}
        handleSecs={handleSecs}
      />
    </div>
  );
}
