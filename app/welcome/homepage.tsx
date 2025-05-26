import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function HomePage() {
  return (
    <main className="flex flex-col h-screen w-screen animate-(--animate-fade-in)">
      <header className="flex flex-row justify-center items-center w-screen p-9 sm:px-12 sm:py-12 gap-1 text-xl ">
        <button className="border-2 p-3 hover:bg-white hover:text-gray-900 transition-colors">Home</button>
        <h1 className="ml-auto self-center font-bold">Pomodoro Timer</h1>
      </header>
      <div className="px-4 sm:px-9 translate-y-20 sm:translate-y-50 animate-(--animate-rise)">
        <h2 className="text-xl sm:text-2xl text-center sm:text-left sm:px-20">Feeling <em className="font-extrabold">unmotivated?</em></h2>
        <h4 className="text-xl font-extralight sm:text-2xl text-center sm:text-left sm:px-20">Use a pomodoro timer to help you stay on track!</h4>
      </div>
    </main>
  );
}