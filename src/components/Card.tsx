import React from "react";

import { CardProps } from "../types";

import Tilt from 'react-parallax-tilt';

import logo from '../assets/logoSimpsons.svg'

export const Card: React.FC<CardProps> = ({cardData, isRotated, onClick}) => {
  return (
    <Tilt
      tiltReverse={true}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#000000"
      glarePosition="bottom"
      glareBorderRadius="20px"
      scale={1.05}
    >
      <div className={`card ${isRotated ? 'rotated' : ''}`} onClick={() => onClick(cardData)}>
        <div className="card__front"> 
          <div className="card__image-icon">
            <img src={cardData.image} alt={`${cardData.character}'s image`} />
          </div>
          <div className="card__quote">{cardData.quote}</div>
        </div>
        <div className="card__back"> 
          <div className="logo-container">
            <img src={logo} alt="Simpsons logo" />
          </div>
        </div>
      </div>
    </Tilt>
  )
}