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
      <div className="flex flex-col gap-10 sm:flex-row px-4 sm:px-9 translate-y-20 sm:translate-y-50 animate-(--animate-rise)">
        <div className="">
          <h2 className="text-xl sm:text-2xl text-center sm:text-left ">
            Feeling <em className="font-extrabold">unmotivated?</em>
          </h2>
          <h4 className="text-xl font-thin sm:text-2xl text-center sm:text-left">
            Use a pomodoro timer to help you stay on track!
          </h4>
        </div>
      </div>
    </main>
  );
}
