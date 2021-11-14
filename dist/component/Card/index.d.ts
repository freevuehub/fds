import React from 'react';
export interface IProps {
    className?: string;
    onClick?: Function;
    cover?: string;
    border?: boolean;
    title?: string;
}
declare const Card: React.FC<IProps>;
export default Card;
