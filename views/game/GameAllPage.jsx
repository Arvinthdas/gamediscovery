import { useDispatch, useSelector } from 'react-redux';
import { selectAllGames, selectAllGamesStatus, selectGamesNextPage, selectGamesPrevPage } from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncGames } from '../../redux/utils/gameUtils';
import { Pagination, Preloader } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';
import './GameAllPage.css';

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectGamesNextPage);
  const prevPage = useSelector(selectGamesPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <div className='GameAllPageWrapper'>
      <div className='sc-games'>
        <div className='container'>
        <div className="container">
          <div className="title">
            Games
          </div>
        </div>

          {
            gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? <>
              <GameList games={games} />
              <Pagination pageHandler={pageHandler} nextPage={nextPage} prevPage={prevPage} currentPage={page} />
            </> : "No games found!"
          }
        </div>
      </div>
    </div>
  )
}

export default GameAllPage;