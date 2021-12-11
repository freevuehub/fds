import React from 'react';
export interface IProps {
    onChange?: Function;
    active: boolean;
    className?: string;
}
declare const NavButton: React.FC<IProps>;
export default NavButton;
