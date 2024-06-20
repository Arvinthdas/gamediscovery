import React from 'react';
import PropTypes from 'prop-types';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ dataNameById }) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <div className="breadcrumb-wrapper">
      {
        breadcrumbs.map(({ match, breadcrumb }) => {
          let id = breadcrumb?.props?.children;
          if (id === "Home") {
            return <Link className="breadcrumb-item" to="/home" key={match.pathname}>Home</Link>;
          }
          if (id === Object.keys(dataNameById)[0]) {
            return <Link className="breadcrumb-item" to={match.pathname} key={match.pathname}>{dataNameById[id]}</Link>;
          }

          return <Link className="breadcrumb-item" to={match.pathname} key={match.pathname}>{breadcrumb}</Link>;
        })
      }
    </div>
  );
}

Breadcrumb.propTypes = {
  dataNameById: PropTypes.object
}

export default Breadcrumb;
