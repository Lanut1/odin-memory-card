import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsAndQuotes } from './utils/api';
import { getCardsData, getGameStatus } from './utils/selectors';
import { Card } from './components/Card';
import { AppDispatch } from './store';
import { TOTAL_QUOTES } from './constants';
import { handleClickedCard } from './store/gameSlice';
import { UniqueCardData } from './types';
import { Header } from './components/Header';
import { Results } from './components/Results';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const gameStatus = useSelector(getGameStatus);

  const handleCardClick = (card: UniqueCardData) => {
    if (gameStatus !== 'playing') return;

    console.log("click!");
    dispatch(handleClickedCard(card));
  }

  useEffect(() => {
    dispatch(fetchCardsAndQuotes(TOTAL_QUOTES));
  }, [dispatch]);

  const cards = useSelector(getCardsData);

  return (
    <>
    <Header/>
    <main>
      {gameStatus === 'playing' ? (cards.map(card => {
        return (
          <Card key={card.id} cardData={card} onClick={handleCardClick}/>
        )
      })) : <Results/>}
    </main>
    </>
  )
}

export default App
