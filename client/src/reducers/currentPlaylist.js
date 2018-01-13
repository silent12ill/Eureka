/*
  STATE SLICE REPRESENTED IN THIS REDUCER
    playlist: {
      videos: [...] // array of videos in the playlist
      counter: 0 // integer pointing to the index of the current video in the videos array
    }
*/

const currentPlaylist = (state = { videos: [], counter: 0, type: null, playlistIsLoading: false }, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST_VIDEOS': // needs to be refactored
      return {
        ...state, 
        videos: action.videos
      }
    case 'UPDATE_VIDEO_COUNTER':
      return {
        ...state,
        counter: action.counter
      }
    case 'SET_CURRENT_PLAYLIST_TYPE':
      return {
        ...state,
        playlistType: action.playlistType
      }
    case 'PLAYLIST_IS_LOADING':
      return {
        ...state,
        playlistIsLoading: action.value
      }
    default:
      return state;
  }
};

export default currentPlaylist;
