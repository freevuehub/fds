import React from 'react';
export interface IProps {
    tile?: boolean;
    rounded?: boolean;
    size?: number;
    className?: string;
    src: string;
}
declare const Avatar: React.FC<IProps>;
export default Avatar;
