import { createSlice, PayloadAction } from "@reduxjs/toolkit"; //PayloadAction
import { CardsState, UniqueCardData } from "../types"; // ErrorData, StatusData, UniqueCardData 
import { fetchCardsAndQuotes } from "../utils/api";
import { ERROR_MESSAGE } from "../constants";

const initialState: CardsState = {
  cards: [],
  cardsToDisplay: [],
  status: 'idle',
  error: ERROR_MESSAGE.NONE
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsToDisplay(state, action: PayloadAction<UniqueCardData[]>) {
      state.cardsToDisplay = action.payload;
    }
    // setCards(state, action: PayloadAction<UniqueCardData[]>) {
    //   state.cards = action.payload;
    // },
    // shuffleCards(state) {
    //   // Shuffle cards in state
    // },
    // setStatus(state, action: PayloadAction<StatusData>) {
    //   state.status = action.payload;
    // },
    // setError(state, action: PayloadAction<ErrorData>) {
    //   state.error = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCardsAndQuotes.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCardsAndQuotes.fulfilled, (state, action) => {
      state.cards = action.payload.allCards;
      state.cardsToDisplay = action.payload.displayedCards;
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

export const { setCardsToDisplay } = cardsSlice.actions;
// export const { setCards, setStatus, setError } = cardsSlice.actions;
