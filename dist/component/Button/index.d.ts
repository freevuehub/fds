import React from 'react';
interface IProps {
    icon?: any;
    className?: string;
    onClick?: Function;
    color?: string;
    dark?: boolean;
    light?: boolean;
    flat?: boolean;
    text?: boolean;
}
declare const Button: React.FC<IProps>;
export default Button;
