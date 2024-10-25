export const DisplayTime = ({ timeInMs }: { timeInMs: number }) => {
    // convert ms to minutes, seconds, milliseconds -- move to helper function?
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 1000 / 60);
        const seconds = Math.floor((ms / 1000) % 60);
        const milliseconds = ms % 1000;

        // make sure minutes & seconds are two digits, milliseconds is 3 digits
        const displayMinutes = minutes.toString().padStart(2, '0');
        const displaySeconds = seconds.toString().padStart(2, '0');
        const displayMilliseconds = milliseconds.toString().padStart(3, '0');

        return `${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;
    

    }

    // display formatted time and style it
    return (
        <div className="flex justify-center w-full">
            <div className="text-6xl font-bold font-mono text-lime-300 m-4 text-center items-center w-full min-w-[200px]">
                {formatTime(timeInMs)}
            </div>
        </div>
    );

}