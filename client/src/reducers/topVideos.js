const topVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOP_VIDEOS':  
      return [...action.videos];

    default: 
      return state;
  }
}

export default topVideos;