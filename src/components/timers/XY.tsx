import { useState, useEffect, useRef } from 'react';
import { FastForwardButton, PlayPauseButton, ResetButton } from '../generic/Button';
import { Input } from '../generic/Input';
import { DisplayTime } from '../generic/DisplayTime';
import { DisplayRounds } from '../generic/DisplayRounds';

const XY = () => {
    const [xyTimeMinValue, setXYTimeMinValue] = useState(0);
    const [xyTimeSecValue, setXYTimeSecValue] = useState(0);
    const [xyRoundsValue, setXYRoundsValue] = useState(1);
    const [xyTime, setXYTime] = useState(0);
    const [isXYRunning, setIsXYRunning] = useState(false);
    const [xyRound, setXYRound] = useState(1);
    const [isXYCompleted, setIsXYCompleted] = useState(false);

    const xyTimeRef = useRef(0);
    const xyRoundRef = useRef(1);

    const resetTimer = () => {
        const totalMs = (xyTimeMinValue * 60 + xyTimeSecValue) * 1000;
        setXYTime(totalMs);
        xyTimeRef.current = totalMs;
    }

    // play/pause XY timer
    const handleStart = () => {
        if (!isXYRunning && (xyTimeMinValue > 0 || xyTimeSecValue > 0) && !isXYCompleted) {
            setIsXYRunning(true);
            resetTimer();
        } else {
            setIsXYRunning(false);
        }
    }

    // reset XY timer
    const handleReset = () => {
        setIsXYRunning(false);
        setIsXYCompleted(false);
        setXYRound(1);
        resetTimer();
    }

    // fast forward XY timer
    const handleFastForward = () => {
        setIsXYRunning(false);
        setIsXYCompleted(true);
        setXYRound(xyRoundsValue);
        xyRoundRef.current = xyRoundsValue;
        setXYTime(0);
        xyTimeRef.current = 0;
    }

    // timer hook 
    useEffect(() => {
        let interval: number;

        if(isXYRunning) {
            interval = setInterval(() => {
                setXYTime((prevTime) => {
                    if (prevTime <= 0) {
                        if (xyRound >= xyRoundsValue) {
                            setIsXYRunning(false);
                            return 0;
                        }
                        setXYRound((prevRound) => prevRound + 1);
                        return (xyTimeMinValue * 60 + xyTimeSecValue) * 1000;
                    }
                    return prevTime - 10;
                })
            }, 10)
        }

        // clean up setInterval
        return () => {
            if (interval) clearInterval(interval);
        }
    }, [isXYRunning, xyRound, xyRoundsValue, xyTimeMinValue, xyTimeSecValue]);

    return (
        <div>
            <DisplayTime timeInMs={xyTime} />
            <DisplayRounds currentRound={xyRound} totalRounds={xyRoundsValue} />
            <div>
                <PlayPauseButton onClick={handleStart} />
                <FastForwardButton onClick={handleFastForward} />
            </div>
            <div>
                <ResetButton onClick={handleReset} />
            </div>
            <hr />
            <div>Time:</div>
            <div>
                Min:
                <Input
                    value={xyTimeMinValue}
                    onChange={setXYTimeMinValue}
                    placeholder="#" />
                Sec:
                <Input
                    value={xyTimeSecValue}
                    onChange={setXYTimeSecValue}
                    placeholder="#" />
            </div>
            <div>Rounds:</div>
            <Input
                value={xyRoundsValue}
                onChange={setXYRoundsValue}
                min={0}
                placeholder="#" />

        </div>
    );
};

export default XY;

