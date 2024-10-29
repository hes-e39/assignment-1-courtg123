interface PanelProps {
    title: string;
    children: React.ReactNode;
}

export const Panel = ({ title, children }: PanelProps) => {
    return (
        <div className="p-10 rounded-xl bg-stone-800 border border-stone-700 mb-10 text-stone-300 w-full max-w-md">
            <h2 className="text-xl font-bold m-4 text-stone-400">{title}</h2>
            <div className="flex flex-col items-center text-center">
                {children}
            </div>
        </div>
    );
}