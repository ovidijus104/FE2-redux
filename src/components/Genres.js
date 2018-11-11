import React from 'react';
import { connect } from 'react-redux';
import { getGenres, getGenreMovies } from '../thunks';

class Genres extends React.Component {
  constructor(props) {
     super(props);
        props.onGetGenres();
    }

  render() {
    const { genresList, onGetGenreMovies, logsList } = this.props;

    return (
        <div className="genres">
            {genresList.map((genre) => (
                <div key={genre.id} className="genre" onClick={() => onGetGenreMovies(genre, logsList)}>
                    {genre.name}
                </div>
            ))}
        </div>
    );
  }
}

export default connect(
    (state) => ({
        genresList: state.genres.list,
        logsList: state.logs.list,
    }),
    (dispatch) => ({
        onGetGenres: () => dispatch(getGenres()),
        onGetGenreMovies: (id, logsList) => dispatch(getGenreMovies(id, logsList)),
    }),
)(Genres);