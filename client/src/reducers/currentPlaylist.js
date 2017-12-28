/*
  STATE SLICE REPRESENTED IN THIS REDUCER
    playlist: {
      videos: [...] // array of videos in the playlist
      currentVideo: {...} // object of the current video
      counter: 0 // integer pointing to the index of the current video in the videos array
    }
*/

const currentPlaylist = (state = { videos: [], currentVideo: {}, counter: 0 }, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST_VIDEOS': // needs to be refactored
      return {
        ...state, 
        videos: action.videos
      }
    case 'SET_CURRENT_VIDEO':
      return {
        ...state,
        currentVideo: action.video
      }
    case 'UPDATE_VIDEO_COUNTER':
      return {
        ...state,
        counter: action.counter
      }
    default:
      return state;
  }
};

export default currentPlaylist;


