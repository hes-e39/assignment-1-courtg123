import { useState } from 'react';
import { Button } from '../generic/Button';
import { DisplayTime } from '../generic/DisplayTime';

const Stopwatch = () => {
    const [stopwatchTime, setStopwatchTime] = useState(0);
    const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    // play/pause the stopwatch
    const handleStart = () => {
        if (!isStopwatchRunning) {
            setIsStopwatchRunning(true);
            
            // interval in milliseconds **DEBUG THIS
            const interval = setInterval(() => {
                setStopwatchTime(prevTime => prevTime + 1);
            }, 1);

            // store the interval id
            setIntervalId(interval);
        } else {
            // clear the interval id
            clearInterval(intervalId);
            setIsStopwatchRunning(false);
        }
    }

    return (
        <div>
            <DisplayTime timeInMs={stopwatchTime} />
            <div><Button onClick={handleStart}>PLAY/PAUSE</Button></div>
            <div><Button>RESET</Button></div>
        </div>
    );
};

export default Stopwatch;
