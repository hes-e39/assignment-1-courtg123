interface InputProps {
    value?: number;
    placeholder?: string;
    className?: string; 
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
}

export const Input = ({ 
    value = 0,
    placeholder = '',
    className = 'm-1 w-16 rounded-sm p-2 text-stone-200 bg-stone-700',
    min = 0,
    max,
    step,
    onChange,
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
            onChange={(e) => onChange?.(Number(e.target.value))}
        />
    );
};

// TO DO needs a disabled state style?