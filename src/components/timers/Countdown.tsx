import { useState } from 'react';
import { Button } from '../generic/Button';
import { Input } from '../generic/Input';

const Countdown = () => {
    const [countdownMinValue, setCountdownMinValue] = useState(0);
    const [countdownSecValue, setCountdownSecValue] = useState(0);

    return (
        <div>
            <div>00:00.00</div>
            <div>
                Min:
                <Input
                    value={countdownMinValue}
                    onChange={setCountdownMinValue}
                    placeholder="#" />
                Sec:
                <Input
                    value={countdownSecValue}
                    onChange={setCountdownSecValue}
                    placeholder="#" />
            </div>
            <div><Button>PLAY/PAUSE</Button> <Button>FAST FORWARD</Button></div>
            <div><Button>RESET</Button></div>
        </div>
    );
};

export default Countdown;
