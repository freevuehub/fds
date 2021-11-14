import React from 'react';
interface IProps {
    name: string;
    duration: number;
    delay?: number;
    active: boolean;
    className?: string;
}
declare const Animation: React.FC<IProps>;
export default Animation;
