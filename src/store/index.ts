import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    cards: cardsSlice,
    game: gameSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;