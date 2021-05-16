import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IButton from './button.interface';
import Button from './button';

const TestButton = ({ onClick, children }: IButton) => <Button onClick={onClick}> {children}</Button>;

test('Primary Button Test', () => {
    // TODO: trial test

    const handleClick = jest.fn();

    render(<TestButton onClick={handleClick}>Primary Button</TestButton>);
    const buttonEl = screen.getByText('Primary Button');
    fireEvent.click(buttonEl);

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('primary');
    expect(buttonEl).toHaveTextContent('Primary Button');
    expect(handleClick).toHaveBeenCalledTimes(1);
});
