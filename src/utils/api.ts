import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardData, UniqueCardData } from "../types";
import { filterUniqueCharacters } from "./filterUniqueCharacters";
import { ERROR_MESSAGE } from "../constants";

export const fetchCardsAndQuotes = createAsyncThunk<
  UniqueCardData[],
  number,
  { rejectValue: string }
>('cards/fetchCards', async (count, { rejectWithValue }) => {
    try {
      const response = await axios.get<CardData[]>(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`);
      const uniqueCards = filterUniqueCharacters(response.data);
      return uniqueCards;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message || ERROR_MESSAGE.FETCH_ERROR);
      }
      return rejectWithValue(ERROR_MESSAGE.UNKNOWN_ERROR);
    }
  }
)