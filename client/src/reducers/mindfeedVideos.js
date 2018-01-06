const mindfeedVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_MINDFEED_VIDEOS':  
      return [...action.videos];

    default: 
      return state;
  }
}

export default mindfeedVideos;