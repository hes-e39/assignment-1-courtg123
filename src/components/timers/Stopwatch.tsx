import { Button } from '../generic/Button';

const Stopwatch = () => {
    return (
        <div>
            <div>00:00.00</div>
            <div><Button>PLAY/PAUSE</Button> <Button>FAST FORWARD</Button></div>
            <div><Button>RESET</Button></div>
        </div>
    );
};

export default Stopwatch;
