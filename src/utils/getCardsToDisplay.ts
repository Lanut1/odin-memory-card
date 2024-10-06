import { UniqueCardData } from "../types";

import { shuffleCards } from "./shuffleCards";

export const getCardsToDisplay = (cards: UniqueCardData[], unclickedCards: UniqueCardData[], numberOfCards: number) => {
  if (unclickedCards.length === 0) return;

  const otherCards: UniqueCardData[] = [];
  const addedCardsID = new Set<string>();

  const unclickedCard = unclickedCards[Math.floor(Math.random() * unclickedCards.length)];
  otherCards.push(unclickedCard);
  addedCardsID.add(unclickedCard.id);

  while (otherCards.length < numberOfCards) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    if (!addedCardsID.has(randomCard.id)) {
      otherCards.push(randomCard);
      addedCardsID.add(randomCard.id);
    }
  }

  return shuffleCards([...otherCards]);
}