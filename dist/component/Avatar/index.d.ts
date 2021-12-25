import React from 'react';
export interface IProps {
    tile?: boolean;
    circle?: boolean;
    size?: number;
    className?: string;
    src: string;
    color?: string;
}
declare const Avatar: React.FC<IProps>;
export default Avatar;
