import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';
import { themeList, sizeList } from '../_utils/typeList';

// const TestButton = ({ children, ...props }: IButton) => <Button {...props}> {children}</Button>;

describe('Buttons  Theme Test', () => {
    themeList.forEach(({ type }) => {
        test(`${type} button test`, () => {
            render(<Button type={type}>{type} button</Button>);
            const buttonEl = screen.getByText(`${type} button`);
            expect(buttonEl).toBeInTheDocument();
            // screen.debug();
            expect(buttonEl).toHaveClass(`${type}`);
            expect(buttonEl).toBeEnabled();
        });
    });
});

describe('Buttons Options Test', () => {
    test('o-block', () => {
        render(<Button block>Block Button</Button>);
        const buttonEl = screen.getByText('Block Button');
        expect(buttonEl).toHaveClass('block');
    });
    test('o-disabled', () => {
        render(<Button disabled>disabled button</Button>);
        const buttonEl = screen.getByText('disabled button');
        expect(buttonEl).toHaveClass('disabled');
        expect(buttonEl).toBeDisabled();
    });
    sizeList.forEach(({ size }) => {
        test('o-size', () => {
            render(<Button size={size}>{size} button</Button>);
            const buttonEl = screen.getByText(`${size} button`);
            expect(buttonEl).toBeInTheDocument();
            expect(buttonEl).toHaveClass(`btn-${size}`);
        });
    });
});

describe('Buttons Events Test', () => {
    test('e-click', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Primary Button</Button>);
        const button = screen.getByText('Primary Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('e-empty-click', () => {
        render(<Button>Empty Event Button</Button>);
        const button = screen.getByText('Empty Event Button');
        fireEvent.click(button);
        expect(button).toBeEnabled();
        expect(button).toBeInTheDocument();
    });
});
