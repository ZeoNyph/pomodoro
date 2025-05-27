import React from "react";
import { Navbar } from "~/components/navbar";
import { PomodoroForm } from "~/components/pomodoro_form";

export function HomePage() {
  return (
    <main className="flex flex-col overscroll-none h-screen w-screen animate-(--animate-fade-in)">
      <Navbar />
      <div className="flex flex-col gap-10 sm:flex-row px-4 sm:px-9 translate-y-20 sm:translate-y-50 animate-(--animate-rise)">
        <div className="align-middle text-center self-center-safe sm:px-20">
          <h2 className="text-xl sm:text-2xl text-center sm:text-left ">
            Feeling <em className="font-extrabold">unmotivated?</em>
          </h2>
          <h4 className="text-xl font-thin sm:text-2xl text-center sm:text-left">
            Use a pomodoro timer to help you stay on track!
          </h4>
        </div>
        <div className="ml-auto mr-auto">
          <PomodoroForm />
        </div>
      </div>
    </main>
  );
}
