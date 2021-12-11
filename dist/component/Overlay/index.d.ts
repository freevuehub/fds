import React from 'react';
interface IOverlayProps {
    className?: string;
    onClose?: Function;
}
interface IOverlayContentProps {
    className?: string;
}
interface IOverlay extends React.FC<IOverlayProps> {
    Content: React.FC<IOverlayContentProps>;
}
declare const Overlay: IOverlay;
export default Overlay;
