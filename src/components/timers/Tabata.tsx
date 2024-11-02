import { useState } from'react';
import { Button } from '../generic/Button';
import { Input } from '../generic/Input';

const Tabata = () => {
    const [workMinTimeValue, setWorkMinTimeValue] = useState(0);
    const [workSecTimeValue, setWorkSecTimeValue] = useState(0);
    const [restMinTimeValue, setRestMinTimeValue] = useState(0);
    const [restSecTimeValue, setRestSecTimeValue] = useState(0);
    const [roundsValue, setRoundsValue] = useState(0);

    return (
        <div>
            <div>00:00.00</div>
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
                min="1"
                placeholder="#" />
            <div><Button>PLAY/PAUSE</Button> <Button>FAST FORWARD</Button></div>
            <div><Button>RESET</Button></div>
            
        </div>
    );
};

export default Tabata;

