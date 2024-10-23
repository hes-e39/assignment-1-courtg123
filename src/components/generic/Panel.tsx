export const Panel = ({ title, children }) => {
    return (
        <div className="p-10 rounded-xl bg-stone-800 border-stone-700 mb-10 text-stone-300">
            <h2 className="text-xl font-bold m-4 text-stone-400">{title}</h2>
            <div className="flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}