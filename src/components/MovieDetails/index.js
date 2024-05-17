import {Component} from 'react'

import Header from '../Header'
import CastDetails from '../CastDetails'

import './index.css'

const jwtToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Q4YmQ4NzExNTI0ZTNkNjY2OWMwNTRmZjFjYjMxMCIsInN1YiI6IjY2Mzg1MjA2NWE0NjkwMDEyMjNlNjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GSFnLSar-U-GUXbYNWDjB9-WS0FCh9UfGxatkms_X0I'
const API_KEY = '67d8bd8711524e3d6669c054ff1cb310'

class MovieDetails extends Component {
  state = {
    productData: {},
    movieCastData: [],
  }

  componentDidMount() {
    this.getMoviesData()
    this.getMovieCastData()
  }

  getFormattedMovieData = data => ({
    name: data.title,
    imageUrl: data.backdrop_path,
    rating: data.vote_average,
    id: data.id,
    duration: data.runtime,
    genre: data.genres[0].name,
    releaseDate: data.release_date,
    overview: data.overview,
  })

  getFormattedMovieCastData = data => ({
    imageUrl: data.profile_path,
    originalName: data.original_name,
    characterName: data.character,
    id: data.id,
  })

  getMoviesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)
      const updatedData = this.getFormattedMovieData(fetchedData)
      // console.log(updatedData)
      this.setState({
        productData: updatedData,
      })
    }
  }

  getMovieCastData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.cast.map(eachCast =>
        this.getFormattedMovieCastData(eachCast),
      )
      console.log(updatedData)
      this.setState({
        movieCastData: updatedData,
      })
    }
  }

  renderMovieDetailsView = () => {
    const {productData} = this.state
    // const {name, imageUrl, rating, duration, genre, releaseDate, overview} = productData

    return (
      <>
        <div className="product-details-success-view">
          <div className="product-details-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${productData.imageUrl}`}
              alt="product"
              className="product-image"
            />
            <div className="product">
              <h1 className="product-name">Tittle:{productData.name}</h1>
              <p className="price-details">
                Release Date:{productData.releaseDate}
              </p>
              <div className="rating-and-reviews-count">
                <div className="rating-container">
                  <p className="rating">Rating:{productData.rating}</p>
                  <p className="reviews-count">
                    Duration:{productData.duration}
                  </p>
                </div>
              </div>
              <p className="product-description">
                Overview:{productData.overview}
              </p>
              <div className="label-value-container">
                <p className="value">Genre:{productData.genre}</p>
              </div>
              <hr className="horizontal-line" />
            </div>
          </div>
        </div>
      </>
    )
  }

  renderMovieCastDetailsView = () => {
    const {movieCastData} = this.state
    return (
      <div>
        <ul className="similar-products-list">
          {movieCastData.map(eachMovie => (
            <CastDetails castDetails={eachMovie} key={eachMovie.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        <h1>Movie Details</h1>
        <div className="product-item-details-container">
          {this.renderMovieDetailsView()}
        </div>
        <div>
          <h1>Cast Details</h1>
          {this.renderMovieCastDetailsView()}
        </div>
      </>
    )
  }
}

export default MovieDetails
