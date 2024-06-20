import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './YouTubeSearch.css'; // Import the CSS file

const YouTubeSearch = ({ search }) => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyBo0Q_g7T64pzOk1tWDfaHAoHPK01oyu0U';

  useEffect(() => {
    if (search) {
      videoSearch(API_KEY, `${search} tutorial`, 10);
    }
  }, [search]);

  const videoSearch = async (key, search, maxResults) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search}`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching the videos', error);
    }
  };

  return (
    <div id="videos-container">
      <div id="videos">
        {videos.map((item) => (
          <iframe
            key={item.id.videoId}
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
            frameBorder="3"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
