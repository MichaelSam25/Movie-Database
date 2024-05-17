import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TopRatedItem from './components/TopRatedItem'
import UpcomingItem from './components/UpcomingItem'
import MovieDetails from './components/MovieDetails'

// write your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRatedItem} />
      <Route exact path="/upcoming" component={UpcomingItem} />
      <Route exact path="/movie/:id" component={MovieDetails} />
    </Switch>
  </>
)

export default App
