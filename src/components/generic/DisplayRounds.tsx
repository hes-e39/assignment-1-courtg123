interface DisplayRoundsProps {
    currentRound: number
    totalRounds: number
    phase?: 'Work' | 'Rest'
}

export const DisplayRounds: React.FC<DisplayRoundsProps> = ({ currentRound, totalRounds, phase }) => {
    const phaseName = phase;
    return (
        <div className="font-mono text-4xl text-green-200 font-bold mb-5">
            <div className="mb-2">Round {currentRound}/{totalRounds}</div>
            {phase && (
                <div className={phase === 'Work' ? 'text-blue-400' : 'text-red-400'}>
                    {phase}
                </div>
            )}
        </div>
    )
}