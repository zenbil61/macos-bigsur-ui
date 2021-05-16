import React from 'react';

interface IButton {
    type?: string;
    width?: number;
    size?: string;
    disabled?: boolean;
    block?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default IButton;
