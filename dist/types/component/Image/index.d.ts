import React from 'react';
export interface IProps {
    src: string;
    alt?: string;
    className?: string;
    onClick?: Function;
}
declare const LazyImage: React.FC<IProps>;
export default LazyImage;
