import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectSingleGame, selectSingleGameStatus } from '../../redux/store/gameSlice';
import { fetchAsyncGameDetails } from '../../redux/utils/gameUtils';
import { Breadcrumb, Preloader } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameDetails } from '../../components/game';
import './GameDetailsPage.css';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const singleGameData = useSelector(selectSingleGame);
  const singleGameStatus = useSelector(selectSingleGameStatus);

  useEffect(() => {
    dispatch(fetchAsyncGameDetails(gameId));
  }, [gameId]);

  const gameNameById = {
    // for sending both id and name also
    [singleGameData.id]: singleGameData.name
  }

  return (
    <div className="GameDetailsPageWrapper">
      <div className='sc-details'>
        <div className='container'>
          <Breadcrumb dataNameById={gameNameById} />
          {
            singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData={singleGameData} />
          }
        </div>
      </div>
    </div>
  )
}

export default GameDetailsPage;
