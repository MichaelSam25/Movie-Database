import './index.css'
import {Link} from 'react-router-dom'

const MoviesItem = props => {
  const {movieDetails} = props
  const {name, imageUrl, rating, id} = movieDetails

  return (
    <>
      <li className="similar-product-item">
        <Link to={`/movie/${id}`} className="link-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
            className="similar-product-img"
            alt="img"
          />
          <p className="similar-product-title">{name}</p>
          <p className="similar-product-title">Rating : {rating}</p>
          <button type="button" className="logout-desktop-btn ">
            View Details
          </button>
        </Link>
      </li>
    </>
  )
}

export default MoviesItem
