'use client'

import React, { useEffect } from "react";

import {  useState } from "react";
import { TimerSelect } from "./timer_select";
import { Timer } from "./timer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [pomodoroMins, setPomodoroMins] = useState(25);
  const [pomodoroSecs, setPomodoroSecs] = useState(0);
  const [timerMins, setTimerMins] = useState(5);
  const [timerSecs, setTimerSecs] = useState(0);
  const [isSelect, setIsSelect] = useState(true);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handlePomodoroMins(e: React.ChangeEvent<HTMLInputElement>) {
    setPomodoroMins(Number(e.target.value));
  }

  function handlePomodoroSecs(e: React.ChangeEvent<HTMLInputElement>) {
    setPomodoroSecs(Number(e.target.value));
  }

  function handleTimerMins(e: React.ChangeEvent<HTMLInputElement>) {
    setTimerMins(Number(e.target.value));
  }

  function handleTimerSecs(e: React.ChangeEvent<HTMLInputElement>) {
    setTimerSecs(Number(e.target.value));
  }

  function handleSelect() {
    if (isSelect) {
      const totalSeconds = pomodoroMins * 60 + pomodoroSecs;
      setRemainingTime(totalSeconds * 1000);
    } else {
      setRemainingTime(0);
    }
    setIsSelect(!isSelect ? true : false);
  }

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (remainingTime <= 0 && !isSelect) {
      new Notification("Pomodoro Timer", {
        body: "Time's up! Take a break.",
      });
      setRemainingTime(0);
      setIsSelect(true);
    }
  }, [remainingTime, isSelect]);

  return (
    <div className="font-mono flex flex-col items-center justify-baseline max-w-screen gap-4 animate-fade max-h-screen">
      <h1 className="font-bold my-6 text-2xl w-auto text-center">POMODORO TIMER</h1>
      {isSelect || remainingTime < 0 ? <h2 className="text-xl font-bold text-center animate-fade">How long do you want the timer to be? </h2>: null}
      {isSelect || remainingTime < 0 ? <TimerSelect
        mins={pomodoroMins}
        secs={pomodoroSecs}
        handleMins={handlePomodoroMins}
        handleSecs={handlePomodoroSecs}
      /> : <Timer
        mins={pomodoroMins}
        secs={pomodoroSecs}
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
      />}
      <button
        className="bg-gray-500 rounded-3xl text-xl p-2 animate-fade hover:bg-gray-300 hover:text-black transition-colors duration-200"
        onClick={handleSelect}
      >
        {isSelect ? "Start" : "Stop"}
      </button>
      {isClient && Notification.permission === "denied" ? (
        <p className="text-gray-700 font-extralight">
          Notifications are blocked. Note that you will not get Pomodoro notifications when the timer runs out.
        </p>
      ) : null}
      <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center text-sm text-gray-500 fixed bottom-0 self-center">
          © {new Date().getFullYear()} <a href="https://github.com/ZeoNyph" className="font-semibold" target="_blank" rel="noopener noreferrer">ZeoNyph</a>. All rights reserved.
        </footer>
    </div>
  );
}
