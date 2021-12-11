import React from 'react';
export interface ICardProps {
    className?: string;
    onClick?: Function;
    border?: boolean;
}
export interface ICardTitleProps {
    className?: string;
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export interface ICardContentProps {
    className?: string;
}
export interface ICard extends React.FC<ICardProps> {
    Title: React.FC<ICardTitleProps>;
    Content: React.FC<ICardContentProps>;
}
declare const Card: ICard;
export default Card;
