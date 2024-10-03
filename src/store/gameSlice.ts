import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState, UniqueCardData } from "../types";
import { NUMBER_OF_CARDS } from "../constants";

const initialState: GameState = {
  currentScore: 0,
  bestScore: 0,
  clickedCardsID: [],
  status: 'playing'
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    handleClickedCard(state, action: PayloadAction<UniqueCardData>) {
      if (state.clickedCardsID.includes(action.payload.id)) {
        state.status = 'lose';
        return;
      }

      state.clickedCardsID.push(action.payload.id);
      state.currentScore++;

      if (state.currentScore >= state.bestScore) {
        state.bestScore = state.currentScore;
      }
    
      if (state.clickedCardsID.length >= NUMBER_OF_CARDS) {
        state.status = 'win';
      }
    },
    resetGame(state) {
      state.currentScore = 0;
      state.clickedCardsID = [];
      state.status = 'playing';
    }
  }
})

export default gameSlice.reducer;

export const { handleClickedCard, resetGame } = gameSlice.actions;