import type { Route } from "./+types/home";
import { HomePage } from "../welcome/homepage";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pomodoro Timer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
