import React from 'react';
import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { StarRating } from '../common';
import './GameItem.css';

const GameItem = ({ gameItem }) => {
  return (
    <div className='game-item-wrapper'>
      <div className='card-top'>
        <img src={gameItem?.background_image} alt={gameItem?.name} />
        <StarRating rating={gameItem?.rating} />
        <div className='ratings-count'>
          {gameItem?.ratings_count} <BsStar className='ms-1' size={12} />
        </div>
      </div>
      <div className='card-bottom'>
        <h4 className='text-white card-title'>
          {gameItem?.name}
        </h4>
        <div className='block-wrap'>
          <div className='details-group'>
            <div className='details-item'>
              <p className='details-item-name'>Release Date: &nbsp;</p>
              <p className='details-item-value'>{gameItem?.released}</p>
            </div>
          </div>
          <Link to={`/games/${gameItem?.id}`} className='card-button'>
            SEE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameItem;

GameItem.propTypes = {
  gameItem: PropTypes.object.isRequired
};
