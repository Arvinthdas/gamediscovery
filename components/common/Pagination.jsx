import React from "react";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Pagination.css';

const Pagination = ({ pageHandler, nextPage, prevPage, currentPage }) => {
  const pageNextHandler = () => {
    if (nextPage !== null) pageHandler(++currentPage);
  };

  const pagePrevHandler = () => {
    if (prevPage !== null) pageHandler(--currentPage);
  };

  return (
    <div className="pagination-wrapper">
      <button
        type="button"
        className={`prev-btn ${
          prevPage === null ? "disabled" : ""
        }`}
        disabled={prevPage === null ? true : false}
        onClick={pagePrevHandler}
      >
        <AiOutlineArrowLeft className="me-3" /> PREV
      </button>
      <button
        type="button"
        className={`next-btn ${
          nextPage === null ? "disabled" : ""
        }`}
        disabled={nextPage === null ? true : false}
        onClick={pageNextHandler}
      >
        NEXT <AiOutlineArrowRight className="me-3" />
      </button>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  pageHandler: PropTypes.func.isRequired,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
};
