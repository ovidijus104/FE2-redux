export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const setGenres = (genres) => ({
    type: 'SET_GENRES',
    genres,
});

export const setHearted = (hearted) => ({
    type: 'SET_HEARTED',
    hearted,
});

export const setLogs = (logs) => ({
    type: 'SET_LOGS',
    logs,
});