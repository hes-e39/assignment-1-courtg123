export const DisplayTime = ({ timeInMs }: { timeInMs: number }) => {
    // convert ms to minutes, seconds, milliseconds
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 1000 / 60);
        const seconds = Math.floor((ms / 1000) % 60);
        const milliseconds = ms % 1000;

        return `${minutes}:${seconds}.${milliseconds}`;
    

    }

    // display formatted time and style it
    return (
        <div className="text-4xl font-bold text-blue-500">
            {formatTime(timeInMs)}
        </div>
    );

}