import React from 'react';
import { theme, size } from '../_utils/types';

interface IButton extends theme, size {
    width?: number;
    disabled?: boolean;
    block?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default IButton;
