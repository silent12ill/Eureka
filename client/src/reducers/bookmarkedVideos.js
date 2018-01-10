const bookmarkedVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARKED_VIDEOS':
      return [...state, ...action.videos];

    case 'ADD_BOOKMARKED_VIDEO':
      return [...state, action.videoId];

    case 'REMOVE_BOOKMARKED_VIDEO':
      return [...state.filter(video => video !== action.videoId)];

    default:
      return state;
  }
}

export default bookmarkedVideos;