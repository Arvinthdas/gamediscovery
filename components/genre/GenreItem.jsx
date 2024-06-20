import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import axios from "../../api/axios";
import { apiURL} from "../../constants";
import { API_KEY } from "../../api/api_key";
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { StarRating } from "../common";
import './GenreItem.css';

const GenreItem = ({ gameItem }) => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${apiURL.gamesURL}/${gameItem.id}?${API_KEY}`);
      setGameData(data);
    }

    fetchData();
  }, []);

  return (
    <div className='GenreItemWrapper card'>
      <div className='card-top img-fit-cover'>
        <img src={gameData?.background_image} alt={gameData?.name} />
        <StarRating rating={gameData?.rating} />
        <div className='ratings-count'>{gameData?.ratings_count} <BsStar className='ms-1' size={12} /></div>
      </div>
      <div className='card-bottom'>
        <h4 className='card-title'>
          {gameData?.name}
        </h4>

        <div className='block-wrap'>
          <div className='details-group'>
            <div className='details-item'>
              <p className='details-item-name'>Release Date:&nbsp;</p>
              <p className='details-item-value'>{gameData?.released}</p>
            </div>
            
          </div>
          
        </div>
        <Link to={`/games/${gameData?.id}`} className='card-button'>see more</Link>
      </div>
    </div>
  )
}

export default GenreItem;

GenreItem.propTypes = {
  gameItem: PropTypes.object
}