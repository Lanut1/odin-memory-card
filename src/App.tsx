import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCardsAndQuotes } from './utils/api';
import { getCardsData, getCardsLoadingStatus, getDisplaedCards, getGameStatus, getUnclickedCards } from './utils/selectors';
import { getCardsToDisplay } from './utils/getCardsToDisplay';

import { CARDS_TO_DISPLAY, TOTAL_QUOTES } from './constants';

import { UniqueCardData } from './types';
import { AppDispatch } from './store';

import { Header } from './components/Header';
import { Results } from './components/Results';
import { Card } from './components/Card';
import { Loading } from './components/Loading';

import { setCardsToDisplay } from './store/cardsSlice';
import { handleClickedCard } from './store/gameSlice';

import './App.css';

function App() {
  const [areCardsRotated, setCardsRotated] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  const gameStatus = useSelector(getGameStatus);
  const cards = useSelector(getCardsData);
  const readyToDisplay = useSelector(getDisplaedCards);
  const unclickedCards = useSelector(getUnclickedCards);
  const cardsToDisplay = useSelector(getDisplaedCards);
  const cardsStatus = useSelector(getCardsLoadingStatus);

  const handleCardClick = (card: UniqueCardData) => {
    if (gameStatus !== 'playing' || areCardsRotated) return;

    dispatch(handleClickedCard(card));
    setCardsRotated(true);
    setTimeout(() => handleCardsShuffle(), 600);
    setTimeout(() => setCardsRotated(false), 1200);
  }

  const handleCardsShuffle = () => {
    const cardsToDisplay = getCardsToDisplay(cards, unclickedCards, CARDS_TO_DISPLAY);

    if (cardsToDisplay) {
      dispatch(setCardsToDisplay(cardsToDisplay));
    } 
  }

  useEffect( () => {
    dispatch(fetchCardsAndQuotes({totalCount: TOTAL_QUOTES, displayCount: CARDS_TO_DISPLAY}));
  }, [dispatch]);

  useEffect(() => {
    if (readyToDisplay.length > 0 && areCardsRotated) {
      setTimeout(() => setCardsRotated(false), 1200);
    }
  }, [readyToDisplay, areCardsRotated]);


  return (
    <>
    <Header/>
    <main>
      {cardsStatus !== 'succeeded' ?
        (<Loading/>) : 
        gameStatus === 'playing' ? 
        (cardsToDisplay.map(card => {
          return (
            <Card
              key={card.id}
              cardData={card}
              isRotated={areCardsRotated}
              onClick={handleCardClick}
            />
          )
        })) :
        <Results/>}
    </main>
    </>
  )
}

export default App;