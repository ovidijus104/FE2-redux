import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies, addHearted, removeHearted, addLogEvent } from '../thunks';

class App extends React.Component {
    constructor(props) {
        super(props);

        props.onGetMovies();
    }

    componentDidMount() {
        const { logsList, onAddLog } = this.props;
        onAddLog('Aplikacija uzkrauta', logsList);
    }

    componentDidUpdate() {
        console.log("Logs list:", this.props.logsList);
    }

  render() {
      const { movieList, heartedList, onAddHeart, onRemoveHeart, logsList } = this.props;

    return (
        <React.Fragment>
          <Genres />

          <div className="cards">
              {movieList.map((movie) => (
                  <Card
                      key={movie.id}
                      isHearted={heartedList.includes(movie.id)}
                      onAddHeart={() => onAddHeart(movie, heartedList, logsList)}
                      onRemoveHeart={() => onRemoveHeart(movie, heartedList, logsList)}
                      movie={movie}
                  />
              ))}
          </div>
        </React.Fragment>
    );
  }
}

export default connect(
  // function to get data from redux store to this components props
  (state) => {
    return {
      movieList: state.movies.list,
      heartedList: state.hearted.list,
      logsList: state.logs.list,
    };
  },
  // function to pass action callers to this components props
  (dispatch) => {
    return {
      // onSetMovies - simplest way to pass data to store
      // onSetMovies: (movies) => dispatch(setMovies(movies)),
      // onGetMovies: () => dispatch(getMovies()),
     onGetMovies: () => dispatch(getMovies()),
     onAddHeart: (id, heartedList, logsList) => dispatch(addHearted(id, heartedList, logsList)),
     onRemoveHeart: (id, heartedList, logsList) => dispatch(removeHearted(id, heartedList, logsList)),
     onAddLog: (message, logsList) => dispatch(addLogEvent(message, logsList)),
    };
  },
)(App);
