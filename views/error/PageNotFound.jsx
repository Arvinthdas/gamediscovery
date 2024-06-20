import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='PageNotFoundWrapper'>
      <div className='container'>
        <p className='value-404'>404</p>
        <p className='not-found-text'>page not found</p>
        <Link to="/" className="section-btn">go to homepage</Link>
      </div>
    </div>
  )
}

export default PageNotFound;
