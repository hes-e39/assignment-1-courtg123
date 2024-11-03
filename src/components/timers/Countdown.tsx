import { useState } from 'react';
import { PlayPauseButton, FastForwardButton, ResetButton } from '../generic/Button';
import { Input } from '../generic/Input';
import { DisplayTime } from '../generic/DisplayTime';

const Countdown = () => {
    const [countdownMinValue, setCountdownMinValue] = useState(0);
    const [countdownSecValue, setCountdownSecValue] = useState(0);
    const [countdownTime, setCountdownTime] = useState(0);
    const [isCountdownRunning, setIsCountdownRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    // play/pause Countdown timer
    const handleStart = () => {
        const totalMs = (countdownMinValue * 60 + countdownSecValue) * 1000;

        if (!isCountdownRunning && totalMs > 0) {
            setIsCountdownRunning(true);
            setCountdownTime(totalMs);
            
            // interval in milliseconds
            const interval = setInterval(() => {
                setCountdownTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        setIsCountdownRunning(false);
                        return(0);
                    }
                    return prevTime - 10;
                });
            }, 10);

            // store the interval id
            setIntervalId(interval);
        } else {
            // clear the interval id
            clearInterval(intervalId);
            setIsCountdownRunning(false);
        }
    };

    // reset Countdown timer
    const handleReset = () => {
        clearInterval(intervalId);
        setIsCountdownRunning(false);
        setCountdownTime(0);
    }

    // fast forward Countdown timer
    const handleFastForward = () => {
        setCountdownTime(0);
        setIsCountdownRunning(false);
        clearInterval(intervalId);
    }


    return (
        <div>
            <DisplayTime timeInMs={countdownTime} />
            <div className="mb-8">
                <PlayPauseButton onClick={handleStart} />
                <FastForwardButton onClick={handleFastForward} />
                <ResetButton onClick={handleReset} />
            </div>
            <hr className="opacity-10" />
            <div className="mt-8 flex flex-row justify-center items-center">
                <Input
                    label="Min"
                    value={countdownMinValue}
                    onChange={setCountdownMinValue}
                    placeholder="#"
                    disabled={isCountdownRunning} />
                <Input
                    label="Sec"
                    value={countdownSecValue}
                    onChange={setCountdownSecValue}
                    placeholder="#"
                    disabled={isCountdownRunning} />
            </div>
        </div>
    );
};

export default Countdown;
