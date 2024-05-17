import {Component} from 'react'

import MoviesItem from '../MoviesItem'
import Header from '../Header'

import './index.css'

const jwtToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Q4YmQ4NzExNTI0ZTNkNjY2OWMwNTRmZjFjYjMxMCIsInN1YiI6IjY2Mzg1MjA2NWE0NjkwMDEyMjNlNjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GSFnLSar-U-GUXbYNWDjB9-WS0FCh9UfGxatkms_X0I'
const API_KEY = '67d8bd8711524e3d6669c054ff1cb310'

class TopRatedItem extends Component {
  state = {
    topRatedMoviesData: [],
  }

  componentDidMount() {
    this.gettopRatedMoviesData()
  }

  gettopRatedMoviesData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
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
      const updatedData = fetchedData.results.map(product => ({
        name: product.title,
        id: product.id,
        imageUrl: product.poster_path,
        rating: product.vote_average,
      }))
      this.setState({
        topRatedMoviesData: updatedData,
      })
    }
  }

  render() {
    const {topRatedMoviesData} = this.state
    return (
      <>
        <Header />
        <div>
          <ul className="similar-products-list">
            {topRatedMoviesData.map(eachMovie => (
              <MoviesItem movieDetails={eachMovie} key={eachMovie.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default TopRatedItem
