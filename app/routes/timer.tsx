import React from "react";
import { Navbar } from "~/components/navbar";

export function meta() {
  return [
    { title: "Pomodoro Timer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Timer() {
  return (
    <main className="flex flex-col h-screen w-screen animate-(--animate-fade-in)">
      <Navbar />
      <div className="flex flex-col sm:flex-row px-4 sm:px-9 items-center justify-center animate-(--animate-rise)">
        <div className="items-center">
          <h2 className="text-xl sm:text-2xl text-center sm:text-left ">
            Time remaining:
          </h2>
          <div className="flex flex-row items-center justify-center mt-3">
            <p className="text-3xl font-black" id="min_1">2</p>
            <p className="text-3xl font-black" id="min_2">5</p>
            <p className="text-3xl font-black" id="separator">:</p>
            <p className="text-3xl font-black" id="sec_1">0</p>
            <p className="text-3xl font-black" id="sec_2">0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
