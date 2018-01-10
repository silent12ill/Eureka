const bookmarkedVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKMARKED_VIDEOS':  
      return [
        ...action.bookmarks
      ];

    case 'ADD_BOOKMARKED_VIDEO':
      return [...state, action.video];

    case 'REMOVE_BOOKMARKED_VIDEO':
      return [...state.filter(video => video.videoId !== action.videoId)];

    default: 
      return state;
  }
}

export default bookmarkedVideos;