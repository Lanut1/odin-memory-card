export type CardData = {
  quote: string;
  character: string;
  image: string;
  characterDirection: string;
}

export type UniqueCardData = {
  id: string;
  quote: string;
  character: string;
  image: string;
}

export type StatusData = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ErrorData = 'none' | string;

export type CardsState = {
  cards: UniqueCardData[];
  cardsToDisplay: UniqueCardData[];
  status: StatusData;
  error: ErrorData;
}

export type CardProps = {
  cardData: UniqueCardData;
  isRotated: boolean;
  onClick: (card: UniqueCardData) => void;
}

export type GameState = {
  currentScore: number;
  bestScore: number;
  clickedCardsID: string[];
  status: 'playing' | 'win' | 'lose';
}
