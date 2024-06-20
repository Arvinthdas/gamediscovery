import React from 'react';
import { loader } from "../../utils/images";
import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader-wrapper'>
      <img src={loader} alt="preloader" />
    </div>
  );
}

export default Preloader;
