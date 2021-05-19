import React from 'react';
import { ISegmented, ISegmentedItem } from './segmented.interface';

const SegmentedItem: React.FC<ISegmentedItem> = ({ active, onClick, value, children }: ISegmentedItem) => (
    <li
        aria-hidden="true"
        onClick={() => onClick && onClick(value)}
        className={`segmented-item ${active ? 'active' : ''}`}
    >
        {children}
    </li>
);

const Segmented: React.FC<ISegmented> = ({ children, onChange, block, activeValue, type }: ISegmented) => (
    <div>
        <ul className={`segmented ${type} ${block ? 'block' : ''}`}>
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                return React.cloneElement(child, {
                    ...child.props,
                    active: child.props.value === activeValue,
                    onClick: onChange,
                });
            })}
        </ul>
    </div>
);

export default Segmented;
export { SegmentedItem, ISegmented, ISegmentedItem };
