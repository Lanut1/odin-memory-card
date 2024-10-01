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
  status: StatusData;
  error: ErrorData;
}

export type CardProps = {
  cardData: UniqueCardData;
  onClick: () => void;
}


