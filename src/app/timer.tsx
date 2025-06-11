"use client"

import { useEffect, useState } from "react";

type TimerProps = {
    mins: number,
    secs: number
}

export function Timer({
    mins,
    secs
} : TimerProps){
    const[end, setEnd] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    useEffect(() => {
        const calculatedEnd = Date.now() + (mins * 60 * 1000 + secs * 1000);
        setEnd(calculatedEnd);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(end - Date.now());
        }, 100);
        return () => clearInterval(interval);
    }, [end]);

    return(
        <div className="flex flex-col w-auto h-auto">
            {remainingTime > 0 && (
                <p className="text-2xl">
                    {Math.floor(remainingTime / 60000)}:{Math.floor((remainingTime % 60000) / 1000).toString().padStart(2, '0')}
                </p>
            )}
        </div>
    );

}