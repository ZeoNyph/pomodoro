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
        const calculatedEnd = Date.now() + remainingTime;
        setEnd(calculatedEnd);
    }, [remainingTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(end - Date.now());
            if (remainingTime <= 0) {
                clearInterval(interval);
                setRemainingTime(0);
            }
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
                    {mins.toString().padStart(2, '0')}:{(secs-1).toString().padStart(2, '0')}
                </p>
            )}
        </div>
    );

}