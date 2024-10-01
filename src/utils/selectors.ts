import { RootState } from "../store";

export const getCardsData = (state: RootState) => state.cards.cards;