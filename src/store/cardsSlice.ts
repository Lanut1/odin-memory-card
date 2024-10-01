import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsState, ErrorData, StatusData, UniqueCardData } from "../types";
import { fetchCardsAndQuotes } from "../utils/api";
import { ERROR_MESSAGE } from "../constants";

const initialState: CardsState = {
  cards: [],
  status: 'idle',
  error: ERROR_MESSAGE.NONE
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<UniqueCardData[]>) {
      state.cards = action.payload;
    },
    // shuffleCards(state) {
    //   // Shuffle cards in state
    // },
    setStatus(state, action: PayloadAction<StatusData>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<ErrorData>) {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCardsAndQuotes.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCardsAndQuotes.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.status = 'succeeded';
      state.error = ERROR_MESSAGE.NONE;
    })
    .addCase(fetchCardsAndQuotes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ?? ERROR_MESSAGE.UNKNOWN_ERROR;
    })
  }

})

export default cardsSlice.reducer;

export const { setCards, setStatus, setError } = cardsSlice.actions;
