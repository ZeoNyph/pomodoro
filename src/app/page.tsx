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
  const [isBreak, setIsBreak] = useState(false);
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
    setIsBreak(false);
  }

  useEffect(() => {
    if (("Notification" in window)) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (remainingTime <= 0 && !isSelect && isClient && typeof window !== "undefined" && "Notification" in window) {
      debugger;
      if (!isBreak) {
      // Pomodoro finished, start break
      new Notification("Pomodoro Timer", {
        body: "Time's up! Take a break.",
      });
      setRemainingTime((timerMins * 60 + timerSecs) * 1000);
      setIsBreak(true);
      } else {
      // Break finished, go back to select
      new Notification("Pomodoro Timer", {
        body: "Break's over! Back to work.",
      });
      setRemainingTime((pomodoroMins * 60 + pomodoroSecs) * 1000);
      setIsBreak(false);
      }
    }
  }, [remainingTime, isSelect, isBreak, isClient, timerMins, timerSecs, pomodoroMins, pomodoroSecs]);

  return (
    <div className="font-mono flex flex-col items-center justify-baseline min-h-[200px] max-w-screen gap-4 animate-fade shrink-0">
      <h1 className="font-bold my-6 text-2xl w-auto text-center">POMODORO TIMER</h1>
      {isSelect? (
        <div className="flex flex-col md:flex-row text-center items-center gap-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-center animate-fade">Pomodoro length</h2>
            <TimerSelect
              mins={pomodoroMins}
              secs={pomodoroSecs}
              handleMins={handlePomodoroMins}
              handleSecs={handlePomodoroSecs}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-center animate-fade">Break length</h2>
            <TimerSelect
              mins={timerMins}
              secs={timerSecs}
              handleMins={handleTimerMins}
              handleSecs={handleTimerSecs}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-center animate-fade">
            {isBreak ? "Break Time" : "Pomodoro Time"}
          </h2>
          <Timer
            mins={!isBreak ? pomodoroMins : timerMins}
            secs={!isBreak ? pomodoroSecs : timerSecs}
            remainingTime={Math.max(0, remainingTime)}
            setRemainingTime={setRemainingTime}
          />
        </div>
      )}
      <button
        className="bg-gray-500 rounded-3xl text-xl p-2 animate-fade hover:bg-gray-300 hover:text-black transition-colors duration-200"
        onClick={handleSelect}
      >
        {isSelect ? "Start" : "Stop"}
      </button>
      {isClient && typeof window !== "undefined" && "Notification" in window && Notification.permission === "denied" ? (
        <p className="text-gray-700 font-extralight">
          Notifications are blocked. Note that you will not get Pomodoro notifications when the timer runs out.
        </p>
      ) : null}
      <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center text-sm text-gray-500 animate-fade">
          © {new Date().getFullYear()} <a href="https://github.com/ZeoNyph" className="font-semibold" target="_blank" rel="noopener noreferrer">ZeoNyph</a>. All rights reserved.
      </footer>
    </div>
  );
}
