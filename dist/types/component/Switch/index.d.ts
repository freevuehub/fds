import React from 'react';
export interface IProps {
    onChange?: Function;
    value?: boolean;
    label?: string;
}
declare const Switch: React.FC<IProps>;
export default Switch;
