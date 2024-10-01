import { NUMBER_OF_CARDS } from "../constants";
import { CardData, UniqueCardData } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const filterUniqueCharacters = (cards: CardData[]): UniqueCardData[] => {
  const uniqueCharacters = new Set<string>();
  const uniqueCards: UniqueCardData[] = [];

  for (const card of cards) {
    if (!uniqueCharacters.has(card.character)) {
      uniqueCharacters.add(card.character);
      uniqueCards.push(
        {
          id: uuidv4(),
          character: card.character,
          image: card.image,
          quote: card.quote
        }
      );
    }

    if (uniqueCards.length === NUMBER_OF_CARDS) break;
  }

  return uniqueCards;
}