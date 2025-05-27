import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function PomodoroForm() {
  const navigate = useNavigate();

  interface PomodoroFormState {
    pomodoro_time: number;
    break_time: number;
  }
  const [formData, setFormData] = useState<PomodoroFormState>({
    pomodoro_time: 25,
    break_time: 5,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData({
        pomodoro_time: Number(sessionStorage.getItem("pomodoro_time")) || 25,
        break_time: Number(sessionStorage.getItem("break_time")) || 5,
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: Number(value),
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pomodoro_time", String(formData.pomodoro_time));
      sessionStorage.setItem("break_time", String(formData.break_time));
    }
    navigate("/timer/");
  };

  return (
    <form
      className="text-center sm:text-left flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
    >
      <label id="pomodoro_time" className="text-xl font-semibold">
        Pomodoro Duration (mins)
      </label>
      <input
        type="number"
        id="pomodoro_time"
        className="bg-gray-800 border-2 h-10 p-3 hover:bg-gray-700 active:rounded-none transition-colors"
        placeholder="Duration"
        defaultValue={formData.pomodoro_time || 25}
        onChange={handleChange}
      />
      <label id="break_time" className="text-xl font-semibold">
        Break Duration (mins)
      </label>
      <input
        type="number"
        id="break_time"
        className="bg-gray-800 border-2 h-10 p-3 hover:bg-gray-700 transition-colors"
        placeholder="Duration"
        defaultValue={formData.break_time || 5}
        onChange={handleChange}
      />
      <input
        type="submit"
        id="submit"
        className="bg-gray-800  border-2 p-2 hover:bg-white hover:text-gray-900 transition-colors"
        value={"Start"}
      />
    </form>
  );
}
