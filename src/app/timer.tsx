"use client"

import { useEffect, useState } from "react";

type TimerProps = {
    mins: number,
    secs: number,
    remainingTime: number,
    setRemainingTime: React.Dispatch<React.SetStateAction<number>>
}

export function Timer({
    mins,
    secs,
    remainingTime,
    setRemainingTime
} : TimerProps){
    const[end, setEnd] = useState(0);
    useEffect(() => {
        const calculatedEnd = Date.now() + (mins * 60 * 1000 + secs * 1000);
        setEnd(calculatedEnd);
    }, [mins, secs]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(end - Date.now());
        }, 100);
        return () => clearInterval(interval);
    }, [end, setRemainingTime]);

    return(
        <div className="flex flex-col m-2 animate-fade">
            {remainingTime != 0 ? (
                <p className="text-4xl font-bold text-center self-center">
                    {Math.floor(remainingTime / 60000).toString().padStart(2, '0')}:{Math.floor((remainingTime % 60000) / 1000).toString().padStart(2, '0')}
                </p>
            ) : (
                <p className="text-4xl font-bold text-center self-center">
                    {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
                </p>
            )}
        </div>
    );

}