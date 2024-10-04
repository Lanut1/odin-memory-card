import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardData, UniqueCardData } from "../types";
import { filterUniqueCharacters } from "./filterUniqueCharacters";
import { ERROR_MESSAGE } from "../constants";
import { getCardsToDisplay } from "./getCardsToDisplay";

export const fetchCardsAndQuotes = createAsyncThunk<
  { allCards: UniqueCardData[], displayedCards: UniqueCardData[] },
  { totalCount: number, displayCount: number },
  { rejectValue: string }
>('cards/fetchCards', async ({ totalCount, displayCount }, { rejectWithValue }) => {
  try {
    const response = await axios.get<CardData[]>(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${totalCount}`);
    const uniqueCards = filterUniqueCharacters(response.data);
    
    // Shuffle all fetched cards
    //const shuffledCards = shuffleArray(uniqueCards);

    const displayedCards = getCardsToDisplay(uniqueCards, uniqueCards, displayCount);
    // Select the first 'displayCount' cards for initial display
    // const displayedCards = shuffledCards.slice(0, displayCount);
    
    return {
      allCards: uniqueCards,
      displayedCards: displayedCards || []
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message || ERROR_MESSAGE.FETCH_ERROR);
    }
    return rejectWithValue(ERROR_MESSAGE.UNKNOWN_ERROR);
  }
});
// export const fetchCardsAndQuotes = createAsyncThunk<
//   { allCards: UniqueCardData[], displayedCards: UniqueCardData[] },
//   { totalCount: number, displayCount: number },
//   { rejectValue: string }
// >('cards/fetchCards', async ({totalCount, displayCount}, { rejectWithValue }) => {
//     try {
//       const response = await axios.get<CardData[]>(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${totalCount}`);
//       const uniqueCards = filterUniqueCharacters(response.data);

//       return uniqueCards;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return rejectWithValue(error.message || ERROR_MESSAGE.FETCH_ERROR);
//       }
//       return rejectWithValue(ERROR_MESSAGE.UNKNOWN_ERROR);
//     }
//   }
// )