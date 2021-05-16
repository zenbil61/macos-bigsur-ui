import React from 'react';
// import "./segmented.scss";

interface ISegmented {
    children: React.ReactNode;
    activeValue: string;
    block?: boolean;
    onChange?: (data: string) => void;
    type?: string;
}
interface ISegmentedItem {
    children: React.ReactNode;
    active?: boolean;
    onClick?: (data: string) => void;
    value: string;
}
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
export { SegmentedItem };
