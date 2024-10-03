import { useDispatch, useSelector } from "react-redux"
import { getGameStatus } from "../utils/selectors"
import { AppDispatch } from "../store";
import { resetGame } from "../store/gameSlice";
import { RESULTS_CARD } from "../constants";

export const Results: React.FC = () => {
  const gameStatus = useSelector(getGameStatus);
  const dispatch = useDispatch<AppDispatch>();

  const handleRestart = () => {
    dispatch(resetGame());
  }

  return (
    <div className="results-card">
      <div className="results-card__image-container"></div>
      <div className="results-card__result-container">
        <div className="results-card__message">
          {gameStatus === 'win' ? RESULTS_CARD.WIN : RESULTS_CARD.LOST}
        </div>
        <div className="results-card__restart-button">
          <button onClick={handleRestart}>{RESULTS_CARD.PLAY_AGAIN}</button>
        </div>
        
      </div>
    </div>
  )
}