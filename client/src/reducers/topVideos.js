const topVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOP_VIDEOS':  
      return [...state, action.videos];

    case 'ADD_TOP_VIDEO':
      return [...state, action.video];

    case 'REMOVE_TOP_VIDEO':
      return [...state.filter(video => video.id !== action.id)];

    default: 
      return state;
  }
}

export default topVideos;