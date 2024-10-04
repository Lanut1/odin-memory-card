import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsAndQuotes } from './utils/api';
import { getCardsData, getCardsLoadingStatus, getDisplaedCards, getGameStatus, getUnclickedCards } from './utils/selectors';
import { Card } from './components/Card';
import { AppDispatch } from './store';
import { CARDS_TO_DISPLAY, TOTAL_QUOTES } from './constants';
import { handleClickedCard } from './store/gameSlice';
import { UniqueCardData } from './types';
import { Header } from './components/Header';
import { Results } from './components/Results';
// import { shuffleCards } from './utils/shuffleCards';
import { getCardsToDisplay } from './utils/getCardsToDisplay';
import { setCardsToDisplay } from './store/cardsSlice';
import { Loading } from './components/Loading';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const gameStatus = useSelector(getGameStatus);
  const cards = useSelector(getCardsData);
  const unclickedCards = useSelector(getUnclickedCards);

  const handleCardClick = (card: UniqueCardData) => {
    if (gameStatus !== 'playing') return;

    dispatch(handleClickedCard(card));
    handleCardsShuffle();
  }

  const handleCardsShuffle = () => {
    // if (gameStatus !== 'playing') return;

    const cardsToDisplay = getCardsToDisplay(cards, unclickedCards, CARDS_TO_DISPLAY);

    if (cardsToDisplay) {
      dispatch(setCardsToDisplay(cardsToDisplay));
    } 
  }

  useEffect( () => {
    dispatch(fetchCardsAndQuotes({totalCount: TOTAL_QUOTES, displayCount: CARDS_TO_DISPLAY}));
  }, [dispatch]);

  const cardsToDisplay = useSelector(getDisplaedCards);
  const cardsStatus = useSelector(getCardsLoadingStatus);

  return (
    <>
    <Header/>
    <main>
      {cardsStatus !== 'succeeded' ? (<Loading/>) : gameStatus === 'playing' ? (cardsToDisplay.map(card => {
        return (
          <Card key={card.id} cardData={card} onClick={handleCardClick}/>
        )
      })) : <Results/>}
    </main>
    </>
  )
}

export default App
