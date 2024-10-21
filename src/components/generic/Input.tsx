interface InputProps {
    value?: string;
    placeholder?: string;
    className?: string; 
    min?: number;
    max?: number;
    step?: number;
}

export const Input = ({ 
    value = '',
    placeholder = '',
    className = '',
    min,
    max,
    step,
}: InputProps) => {
    return (
        <input
            type="number"
            value={value}
            placeholder={placeholder}
            className={className}
            min={min}
            max={max}
            step={step}
        />
    );
};