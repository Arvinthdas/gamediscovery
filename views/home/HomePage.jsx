import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Preloader, Tabs } from "../../components/common/index";
import { Link } from "react-router-dom";
import {
  selectAllGames,
  selectAllGamesStatus,
} from "../../redux/store/gameSlice";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game/index";
import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
  }, [dispatch]);

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="section-btn">
        <Link to="/games" className="btn">
          See more games
        </Link>
      </div>
    </>
  );

  return (
    <div className="home-page">
      <section className="genres-section">
        <div className="container">
          <div className="title">
            <span className="first-text">Top</span>{" "}
            <span className="second-text">Genres</span>
          </div>
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          <p>No genres found!</p>
        )}
      </section>

      <section className="popular-games-section">
        <div className="container">
          <div className="title">
            <span className="first-text">Top Popular</span>{" "}
            <span className="second-text">Games</span>
          </div>
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            <p>No games found!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
