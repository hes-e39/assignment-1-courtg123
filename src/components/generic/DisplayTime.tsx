export const DisplayTime = ({ timeInMs }: { timeInMs: number }) => {
    // convert ms to minutes, seconds, milliseconds -- move to helper function?
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 1000 / 60);
        const seconds = Math.floor((ms / 1000) % 60);
        const milliseconds = ms % 1000;

        return `${minutes}:${seconds}.${milliseconds}`;
    

    }

    // display formatted time and style it
    return (
        <div className="text-4xl font-bold text-lime-300 m-4">
            {formatTime(timeInMs)}
        </div>
    );

}