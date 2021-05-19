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

export { ISegmented, ISegmentedItem };
