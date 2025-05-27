import React from "react";
import { HomePage } from "../welcome/homepage";

export function meta() {
  return [
    { title: "Pomodoro Timer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
