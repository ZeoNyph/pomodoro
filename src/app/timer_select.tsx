import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

type TimerSelectProps = {
  mins: number;
  secs: number;
  handleMins: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecs: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TimerSelect({
  mins,
  secs,
  handleMins,
  handleSecs,
}: TimerSelectProps) {
  function handleMinChange(e: React.MouseEvent<HTMLElement>) {
    const id = (e.currentTarget as HTMLElement).id;
    console.log(id);
    if (id === "min_up") {
      const value = mins + 1 > 59 ? "0" : Math.min(mins + 1, 59).toString();
      handleMins({
        target: { value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (id === "min_down") {
      const value = mins - 1 < 0 ? "59" : Math.max(mins - 1, 0).toString();
      handleMins({
        target: { value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  function handleSecChange(e: React.MouseEvent<HTMLButtonElement>) {
    const id = (e.currentTarget as HTMLElement).id;
    if (id === "sec_up") {
      const value = secs + 1 > 59 ? "0" : Math.min(secs + 1, 59).toString();
      handleSecs({
        target: { value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (id === "sec_down") {
      const value = secs - 1 < 0 ? "59" : Math.max(secs - 1, 0).toString();
      handleSecs({
        target: { value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  return (
    <div className="flex flex-col w-auto h-auto animate-fade">
      <div className="py-2 gap-3 flex flex-row items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-m text-center font-light">Minutes</h2>
          <button
            id="min_up"
            className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl hover:bg-gray-300 transition-colors duration-200 group"
            onClick={handleMinChange}
          >
            <FaArrowUp className="text-white group-hover:text-black" />
          </button>
          <input
            id="min"
            type="text"
            min={0}
            max={59}
            maxLength={mins < 10 ? 3 : 2}
            size={2}
            value={mins < 10 ? `0${mins}` : mins}
            onChange={handleMins}
            className="bg-gray-500 rounded-2xl text-2xl text-center h-16 w-12 self-center active:bg-gray-400 focus:bg-gray-400 transition-colors duration-200"
          ></input>
          <button
            id="min_down"
            className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl hover:bg-gray-300 transition-colors duration-200 group"
            onClick={handleMinChange}
          >
            <FaArrowDown className="text-white group-hover:text-black" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-m text-center font-light">Seconds</h2>
          <button
            id="sec_up"
            className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl hover:bg-gray-300 transition-colors duration-200 group"
            onClick={handleSecChange}
          >
            <FaArrowUp className="text-white group-hover:text-black" />
          </button>
          <input
            id="sec"
            type="text"
            min={0}
            max={59}
            maxLength={secs < 10 ? 3 : 2}
            size={2}
            value={secs < 10 ? `0${secs}` : secs}
            onChange={handleSecs}
            className="bg-gray-500 rounded-2xl text-2xl text-center h-16 w-12 self-center active:bg-gray-400 focus:bg-gray-400  transition-colors duration-200"
          />
          <button
            id="sec_down"
            className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl hover:bg-gray-300 transition-colors duration-200 group"
            onClick={handleSecChange}
          >
            <FaArrowDown className="text-white group-hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
