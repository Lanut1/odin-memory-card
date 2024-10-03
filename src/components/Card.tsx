import React from "react";
import { CardProps } from "../types";

export const Card: React.FC<CardProps> = ({cardData, onClick}) => {
  return (
    <div className="card" onClick={() => onClick(cardData)}>
      <div className="card__image-icon"><img src={cardData.image} alt={`${cardData.character}'s image`} /></div>
      <div className="card__quote">{cardData.quote}</div>
    </div>
  )
}