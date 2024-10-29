interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ 
    children,
    onClick,
    className = ''
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-1 bg-gray-950 text-stone-300 border-stone-700 border rounded-md m-1 ${className}`}
        >
            {children}
        </button>
    );
};

// TO DO maybe create variants of buttons here e.g. play/pause, fast forward, reset? or primary/secondary?