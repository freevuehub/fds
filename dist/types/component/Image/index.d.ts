import React from 'react';
export interface IProps {
    src: string;
    alt?: string;
    className?: string;
    onClick?: Function;
    width?: number;
    height?: number;
    now?: boolean;
}
declare const LazyImage: React.FC<IProps>;
export default LazyImage;
