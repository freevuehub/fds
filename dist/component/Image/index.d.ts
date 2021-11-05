import React from 'react';
interface IProps {
    src: string;
    alt?: string;
    className?: string;
    onClick?: Function;
}
declare const LazyImage: React.FC<IProps>;
export default LazyImage;
