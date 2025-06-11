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
        <div className="flex flex-col animate-fade m-2">
            {remainingTime != 0 ? (
                <p className="text-4xl font-bold text-center self-center">
                    {Math.floor(remainingTime / 60000)}:{Math.floor((remainingTime % 60000) / 1000).toString().padStart(2, '0')}
                </p>
            ) : (
                <p className="text-4xl font-bold text-center self-center">
                    {mins}:{secs.toString().padStart(2, '0')}
                </p>
            )}
        </div>
    );

}