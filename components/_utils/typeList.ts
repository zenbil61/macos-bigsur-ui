import { theme, size } from './types';

const themeList: theme[] = [
    { type: 'primary' },
    { type: 'secondary' },
    { type: 'success' },
    { type: 'danger' },
    { type: 'warning' },
    { type: 'info' },
    { type: 'dark' },
    { type: 'light' },
];
const sizeList: size[] = [{ size: 'sm' }, { size: 'md' }, { size: 'lg' }];

export { themeList, sizeList };
