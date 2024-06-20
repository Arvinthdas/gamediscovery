import React from 'react';
import PropTypes from 'prop-types';
import GameItem from './GameItem';
import './GameList.css';

const GameList = ({ games, sliceValue = games.length }) => {
  return (
    <div className='GameListWrapper'>
      <div className='card-list'>
        {games?.slice(0, sliceValue).map(item => (
          <GameItem key={item.id} gameItem={item} />
        ))}
      </div>
    </div>
  );
};

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number
};
