import React from "react";
import {
  AiFillClockCircle,
  AiOutlineDesktop,
  AiFillTags,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YouTubeSearch from './YouTubeSearch';
import './GameDetails.css';

const GameDetails = ({ gameData }) => {
  let platforms = gameData?.platforms?.map(
    (platform) => platform.platform.name
  );
  let genres = gameData?.genres?.map((genre) => genre.name);

  return (
    <div className="GameDetailsWrapper">
      <div className="details-title">
        <h3 className="details-title-text">
          {gameData?.name}
        </h3>
      </div>
      <div className="details-grid">
        <div className="details-left">
          <img src={`${gameData?.background_image}`} alt={gameData?.name} />
        </div>

        <div className="details-right">
          <h4 className="details-right-title">
            Game <span>Details</span>
          </h4>
          {}
          <div
            className="para-text"
            dangerouslySetInnerHTML={{
              __html:
                gameData?.description?.split(".").splice(0, 3).join(".") + ".",
            }}
          ></div>

          <ul className="details-list-group">
            <li className="list-group-item">
              <div className="item-left">
                <span className="item-icon">
                  <AiFillClockCircle size={20} />
                </span>
                <span className="item-title">
                  RELEASE DATE:
                </span>
              </div>
              <span className="item-right">
                {gameData?.released}
              </span>
            </li>

            <li className="list-group-item">
              <div className="item-left">
                <span className="item-icon">
                  <AiOutlineDesktop size={20} />
                </span>
                <span className="item-title">
                  PLATFORM:
                </span>
              </div>
              <span className="item-right">
                {platforms?.join(", ")}
              </span>
            </li>

            <li className="list-group-item">
              <div className="item-left">
                <span className="item-icon">
                  <AiFillTags size={20} />
                </span>
                <span className="item-title">GENRES:</span>
              </div>
              <span className="item-right">
                {genres?.join(", ")}
              </span>
            </li>

          </ul>
        </div>
      </div>
      {/* Tabs */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>YouTube</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-white">Game Description</h3>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: gameData?.description }}
          ></div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white">YouTube</h3>
          <YouTubeSearch search={gameData?.name} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

GameDetails.propTypes = {
  gameData: PropTypes.object,
};

export default GameDetails;
