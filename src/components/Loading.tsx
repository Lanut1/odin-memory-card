import React from "react";
import { LOADING } from "../constants";
import loadingLogo from '../assets/loadingLogo.svg';

export const Loading: React.FC = () => {
  return (
    <div className="loading__container">
      <div className="loading__image-container">
        <img src={loadingLogo} alt={LOADING} />
      </div>
      <div className="loading__title">{LOADING}</div>
    </div>
  )
}