import { RootState } from "../store";

export const getCardsData = (state: RootState) => state.cards.cards;

export const getGameStatus = (state: RootState) => state.game.status;

export const getCurrentScore = (state: RootState) => state.game.currentScore;

export const getBestScore = (state: RootState) => state.game.bestScore;