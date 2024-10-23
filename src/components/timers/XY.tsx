import { useState } from 'react';
import { Button } from '../generic/Button';
import { Input } from '../generic/Input';

const XY = () => {
    const [xyTimeMinValue, setXYTimeMinValue] = useState(0);
    const [xyTimeSecValue, setXYTimeSecValue] = useState(0);
    const [xyRoundsValue, setXYRoundsValue] = useState(0);

    return (
        <div>
            <div>00:00.00</div>
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
                placeholder="#" />
            <div><Button>PLAY/PAUSE</Button> <Button>FAST FORWARD</Button></div>
            <div><Button>RESET</Button></div>
        </div>
    );
};

export default XY;

