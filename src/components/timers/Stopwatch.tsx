import { useState } from 'react';
import { PlayPauseButton, FastForwardButton, ResetButton } from '../generic/Button';
import { Input } from '../generic/Input';
import { DisplayTime } from '../generic/DisplayTime';

const Stopwatch = () => {
    const [stopwatchTime, setStopwatchTime] = useState(0);
    const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    const [stopwatchMinValue, setStopwatchMinValue] = useState(0);
    const [stopwatchSecValue, setStopwatchSecValue] = useState(0);

    // play/pause Stopwatch timer
    const handleStart = () => {
        const totalMs = (stopwatchMinValue * 60 + stopwatchSecValue) * 1000;

        if (!isStopwatchRunning && totalMs > 0) {
            setIsStopwatchRunning(true);
            
            // interval in milliseconds
            const interval = setInterval(() => {
                setStopwatchTime(prevTime => {
                    if (prevTime >= totalMs) {
                        clearInterval(interval);
                        setIsStopwatchRunning(false);
                        return totalMs;
                    }
                    return prevTime + 10;
                });
            }, 10);

            // store the interval id
            setIntervalId(interval);
        } else {
            // clear the interval id
            clearInterval(intervalId);
            setIsStopwatchRunning(false);
        }
    };

    // reset Stopwatch timer
    const handleReset = () => {
        clearInterval(intervalId);
        setIsStopwatchRunning(false);
        setStopwatchTime(0);
    }

    // fast forward Stopwatch timer
    const handleFastForward = () => {
        setIsStopwatchRunning(false);
        const totalMs = (stopwatchMinValue * 60 + stopwatchSecValue) * 1000;
        setStopwatchTime(totalMs);
        return totalMs;
    }
    

    return (
        <div>
            <DisplayTime timeInMs={stopwatchTime} />
            <div className="mb-8">
                <PlayPauseButton onClick={handleStart} />
                <FastForwardButton onClick={handleFastForward} />
                <ResetButton onClick={handleReset} />
            </div>
            <hr className="opacity-10" />
            <div className="mt-8 flex flex-row justify-center items-center">
                <Input
                    label="Min"
                    value={stopwatchMinValue}
                    onChange={setStopwatchMinValue}
                    placeholder="#"
                    disabled={isStopwatchRunning} />
                <Input
                    label="Sec"
                    value={stopwatchSecValue}
                    onChange={setStopwatchSecValue}
                    placeholder="#"
                    disabled={isStopwatchRunning} />
            </div>

        </div>
    );
};

export default Stopwatch;
