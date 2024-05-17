import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {details} = props
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-large-container">
            <h1>movieDB</h1>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Popular
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/top-rated" className="nav-link">
                  Top Rated
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/upcoming" className="nav-link">
                  Upcoming
                </Link>
              </li>
              <input type="search" className="search-input" />
              <button type="button" className="logout-desktop-btn">
                Search
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
/*  
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }  
  */
