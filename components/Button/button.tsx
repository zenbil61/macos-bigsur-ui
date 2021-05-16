import React from 'react';
import IButton from './button.interface';

// import "./button.scss";

const Button: React.FC<IButton> = ({
    type = 'primary',
    size,
    disabled,
    block,
    children,
    onClick,
    ...props
}: IButton) => {
    const btnClass = `btn 
    ${type} 
    ${block ? 'block' : ''}
    ${disabled ? 'disabled' : ''} 
    ${size ? `btn-${size}` : ''}`;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
    };

    return (
        <button type="button" onClick={handleClick} disabled={disabled} className={btnClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
