import React, { useEffect } from "react";
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
  function handleMinChange(e: React.MouseEvent<HTMLButtonElement>) {
    const id = (e.currentTarget as HTMLButtonElement).id;

    if (id === "min_up") {
      const value = mins + 1 > 59 ? "0" : Math.min(mins + 1, 59).toString();
      handleMins({
        target: { value: value },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (id === "min_down") {
      const value = mins - 1 < 0 ? "59" : Math.max(mins - 1, 0).toString();
      handleMins({
        target: { value: Math.max(mins - 1, 0).toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  function handleSecChange(e: React.MouseEvent<HTMLButtonElement>) {
    const id = (e.currentTarget as HTMLButtonElement).id;
    if (id === "sec_up") {
      handleSecs({
        target: { value: Math.min(secs + 1, 59).toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (id === "sec_down") {
      handleSecs({
        target: { value: Math.max(secs - 1, 0).toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  return (
    <div className="py-2 gap-3 flex flex-row items-center">
      <div className="flex flex-col gap-6">
        <button
          id="min_up"
          className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl"
          onClick={handleMinChange}
        >
          <FaArrowUp />
        </button>
        <input
          id="min"
          type="text"
          min={0}
          max={59}
          maxLength={2}
          size={2}
          value={mins < 10 ? `0${mins}` : mins}
          onChange={handleMins}
          className="bg-gray-500 rounded-3xl text-2xl text-center h-16"
        ></input>
        <button
          id="min_down"
          className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl"
          onClick={handleMinChange}
        >
          <FaArrowDown />
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <button
          id="sec_up"
          className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl"
          onClick={handleSecChange}
        >
          <FaArrowUp />
        </button>
        <input
          id="sec"
          type="text"
          min={0}
          max={59}
          maxLength={2}
          size={2}
          value={secs < 10 ? `0${secs}` : secs}
          onChange={handleSecs}
          className="bg-gray-500 rounded-3xl text-2xl text-center h-16"
        />
        <button
          id="sec_down"
          className="flex flex-row bg-gray-500 size-8 justify-center align-middle self-center p-2 rounded-3xl"
          onClick={handleSecChange}
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}
