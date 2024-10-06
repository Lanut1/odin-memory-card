import React from "react";
import { useSelector } from "react-redux";

import logo from '../assets/logoSimpsons.svg';

import { getBestScore, getCurrentScore } from "../utils/selectors";

import { HEADER_SCORE } from "../constants";

export const Header: React.FC = () => {
  const currentScore = useSelector(getCurrentScore);
  const bestScore = useSelector(getBestScore);

  return (
    <header>
      <div className="logo-container"><img src={logo} alt="Simpsons logo" /></div>
      <div className="score">
        <div className="score__current">{HEADER_SCORE.CURRENT_SCORE} {currentScore}</div>
        <div className="score__best">{HEADER_SCORE.BEST_SCORE} {bestScore}</div>
      </div>
    </header>
  )
}