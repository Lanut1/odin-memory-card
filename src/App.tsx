import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsAndQuotes } from './utils/api';
import { getCardsData } from './utils/selectors';
import { Card } from './components/Card';
import { AppDispatch } from './store';
import { TOTAL_QUOTES } from './constants';

function App() {

  const handleCardClick = () => {
    console.log("click!")
  }

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCardsAndQuotes(TOTAL_QUOTES));
  }, [dispatch]);

  const cards = useSelector(getCardsData);

  return (
    <>
    {cards.map(card => {
      return (
        <Card key={card.id} cardData={card} onClick={handleCardClick}/>
      )
    })}
     
    </>
  )
}

export default App
