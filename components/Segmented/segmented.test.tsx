import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Segmented, { ISegmented, SegmentedItem } from './segmented';

const TestSegmented: React.FC<ISegmented> = ({ children, ...props }: ISegmented) => (
    <Segmented {...props}>{children}</Segmented>
);

test('Primary Segmented Test', () => {
    // TODO: trial test

    const handleClick = jest.fn();

    render(
        <TestSegmented onChange={handleClick} activeValue="1">
            <SegmentedItem value="1"> val 1</SegmentedItem>
            <SegmentedItem value="2"> val 2</SegmentedItem>
            <SegmentedItem value="3"> val 3</SegmentedItem>
        </TestSegmented>,
    );
    const segmentedEl = screen.getByText('val 1');
    fireEvent.click(segmentedEl);
    expect(segmentedEl).toBeInTheDocument();
    expect(segmentedEl).toHaveTextContent('val 1');
    expect(handleClick).toHaveBeenCalledTimes(1);
});
