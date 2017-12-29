const bookmarkVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARK_VIDEOS':  
      return [...state, action.videos];

    case 'ADD_BOOKMARK_VIDEO':
      return [...state, action.video];

    case 'REMOVE_BOOKMARK_VIDEO':
      return [...state.filter(video => video.id !== action.id)];

    default: 
      return state;
  }
}

export default bookmarkVideos;