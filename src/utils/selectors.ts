import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const getCardsData = (state: RootState) => state.cards.cards;

export const getGameStatus = (state: RootState) => state.game.status;

export const getCurrentScore = (state: RootState) => state.game.currentScore;

export const getBestScore = (state: RootState) => state.game.bestScore;

export const getUnclickedCards = createSelector(
  (state: RootState) => state.cards.cards,
  (state: RootState) => state.game.clickedCardsID,
  (cards, clickedCardsID) => cards.filter(card => !clickedCardsID.includes(card.id))
);

export const getDisplaedCards = (state: RootState) => state.cards.cardsToDisplay;

export const getCardsLoadingStatus = (state: RootState) => state.cards.status;