import { useState, useRef, useEffect } from'react';
import { PlayPauseButton, FastForwardButton, ResetButton } from '../generic/Button';
import { Input } from '../generic/Input';
import { DisplayTime } from '../generic/DisplayTime';
import { DisplayRounds } from '../generic/DisplayRounds';

const Tabata = () => {
    const [workMinTimeValue, setWorkMinTimeValue] = useState(0);
    const [workSecTimeValue, setWorkSecTimeValue] = useState(0);
    const [restMinTimeValue, setRestMinTimeValue] = useState(0);
    const [restSecTimeValue, setRestSecTimeValue] = useState(0);
    const [tabataRoundsValue, setTabataRoundsValue] = useState(1);
    const [tabataTime, setTabataTime] = useState(0);
    const [isTabataRunning, setIsTabataRunning] = useState(false);
    const [tabataRound, setTabataRound] = useState(1);
    const [isTabataCompleted, setIsTabataCompleted] = useState(false);
    const [currentPhase, setCurrentPhase] = useState<'Work' | 'Rest'>('Work');

    const tabataTimeRef = useRef(0);
    const tabataRoundRef = useRef(1);
    const tabataPhaseRef = useRef<'Work' | 'Rest'>('Work');

    const resetTimer = () => {
        const workTime = (workMinTimeValue * 60 + workSecTimeValue) * 1000;
        setTabataTime(workTime);
        tabataTimeRef.current = workTime;
        setCurrentPhase('Work');
        tabataPhaseRef.current = 'Work';
    }

    // play/pause Tabata timer
    const handleStart = () => {
        if (!isTabataRunning && (workMinTimeValue > 0 || workSecTimeValue > 0) && !isTabataCompleted) {
            setIsTabataRunning(true);
            resetTimer();
        } else {
            setIsTabataRunning(false);
        }
    }

    // TO DO reset Tabata timer
    const handleReset = () => {
        setIsTabataRunning(false);
        setIsTabataCompleted(false);
        setTabataRound(1);
        tabataRoundRef.current = 1;
        resetTimer();
    }

    // TO DO fast forward Tabata timer
    const handleFastForward = () => {
        setIsTabataRunning(false);
        setIsTabataCompleted(true);
        setTabataRound(tabataRoundsValue);
        tabataRoundRef.current = tabataRoundsValue;
        setTabataTime(0);
        tabataTimeRef.current = 0;
        setCurrentPhase('Rest');
        tabataPhaseRef.current = 'Rest';
    }

    // timer hook - TO DO check if this runs on production ok
    useEffect(() => {
        let interval: number;

        if(isTabataRunning) {
            interval = setInterval(() => {
                setTabataTime((prevTime) => {
                    if (prevTime <= 0) {
                        if (tabataPhaseRef.current === 'Work') {
                            tabataPhaseRef.current = 'Rest';
                            setCurrentPhase('Rest');
                            return (restMinTimeValue * 60 + restSecTimeValue) * 1000;
                        } else {
                            if (tabataRoundRef.current >= tabataRoundsValue) {
                                setIsTabataRunning(false);
                                setIsTabataCompleted(true);
                                return 0;
                            }
                            tabataRoundRef.current += 1;
                            setTabataRound(tabataRoundRef.current);
                            tabataPhaseRef.current = 'Work';
                            setCurrentPhase('Work');
                            return (workMinTimeValue * 60 + workSecTimeValue) * 1000;
                        }
                    }
                    return prevTime - 10;
                })
            }, 10)
        }

        // clean up setInterval
        return () => {
            if (interval) clearInterval(interval);
        }
    }, [isTabataRunning, tabataRoundsValue, workMinTimeValue, workSecTimeValue, restMinTimeValue, restSecTimeValue]);


    return (
        <div>
            <DisplayTime timeInMs={tabataTime} />
            <DisplayRounds currentRound={tabataRound} totalRounds={tabataRoundsValue} phase={currentPhase} />
            <div>Work:</div>
            <div>
                Min: 
                <Input
                    value={workMinTimeValue}
                    onChange={setWorkMinTimeValue}
                    placeholder="#" />
                Sec: 
                <Input
                    value={workSecTimeValue}
                    onChange={setWorkSecTimeValue}
                    placeholder="#" />
            </div>
            <div>Rest:</div>
            <div>
                Min: 
                <Input
                    value={restMinTimeValue}
                    onChange={setRestMinTimeValue}
                    placeholder="#" />
                Sec: 
                <Input
                    value={restSecTimeValue}
                    onChange={setRestSecTimeValue}
                    placeholder="#" />
            </div>
            <div>Rounds:</div>
            <Input
                value={tabataRoundsValue}
                onChange={setTabataRoundsValue}
                min={1}
                placeholder="#" />
            <div>
                <PlayPauseButton onClick={handleStart} />
                <FastForwardButton onClick={handleFastForward} />
            </div>
            <div>
                <ResetButton onClick={handleReset} />
            </div>
            
        </div>
    );
};

export default Tabata;

