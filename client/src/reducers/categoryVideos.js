const categoryVideos = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORY_VIDEOS':  
      return [...action.videos];

    default: 
      return state;
  }
}

export default categoryVideos;