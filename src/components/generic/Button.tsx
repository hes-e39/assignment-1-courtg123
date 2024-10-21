interface ButtonProps {
    children: string;
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
            className={`px-4 py-1 bg-gray-950 text-white ${className}`}
        >
            {children}
        </button>
    );
};