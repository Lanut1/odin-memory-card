import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";

const store = configureStore({
  reducer: {
    cards: cardsSlice
    // game: gameReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;