import React from "react";
import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-center items-center w-screen p-9 sm:px-12 sm:py-12 gap-1 text-xl ">
      <button
        className="border-2 p-3 hover:bg-white hover:text-gray-900 transition-colors"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <h1 className="ml-auto self-center font-bold">Pomodoro Timer</h1>
    </header>
  );
}
