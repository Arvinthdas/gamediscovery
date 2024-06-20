import React, { useState } from 'react';
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import { GenreItem } from '../genre';
import './Tabs.css';

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]);
  const [tabButtonStatus, setTabButtonStatus] = useState(false);

  const tabClickHandler = (id) => {
    data.map(item => {
      if (item.id === id) {
        setActiveTab(item);
      }
    })
  }

  const tabButtonsHandler = () => setTabButtonStatus(prevStatus => !prevStatus);

  return (
    <div className='tabs-wrapper'>
      <div className='container'>
        <div className='tabs-content'>
          <ul className={`tabs-buttons ${tabButtonStatus ? "show" : ""}`}>
            <button type="button" className='tabs-buttons-close' onClick={tabButtonsHandler}>
              <AiOutlineMenu size={22} />
            </button>
            {
              data.map(item => {
                return (
                  <li key={item?.id} className={`tabs-button ${item?.id === activeTab.id ? 'tabs-active' : ""}`}>
                    <button className='text-white' type="button" onClick={() => tabClickHandler(item?.id)}>{item?.name}</button>
                  </li>
                )
              })
            }
          </ul>

          <div className='tabs-body'>
            <div className='card-list'>
              {
                activeTab?.games?.map(item => (
                  <GenreItem key={item.id} gameItem={item} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs;

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  sliceValue: PropTypes.number
}
