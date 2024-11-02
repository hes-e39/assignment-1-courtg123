import { useState } from'react';
import { PlayPauseButton, FastForwardButton, ResetButton } from '../generic/Button';
import { Input } from '../generic/Input';
import { DisplayTime } from '../generic/DisplayTime';

const Tabata = () => {
    const [workMinTimeValue, setWorkMinTimeValue] = useState(0);
    const [workSecTimeValue, setWorkSecTimeValue] = useState(0);
    const [restMinTimeValue, setRestMinTimeValue] = useState(0);
    const [restSecTimeValue, setRestSecTimeValue] = useState(0);
    const [roundsValue, setRoundsValue] = useState(1);
    const [tabataTime, setTabataTime] = useState(0);

    // TO DO play/pause Tabata timer
    const handleStart = () => {
        return;
    }

    // TO DO reset Tabata timer
    const handleReset = () => {
        return;
    }

    // TO DO fast forward Tabata timer
    const handleFastForward = () => {
        return;
    }

    return (
        <div>
            <DisplayTime timeInMs={tabataTime} />
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
                value={roundsValue}
                onChange={setRoundsValue}
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

