const videoCache = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_VIDEO_CACHE':
      return extendCache(state, action.videos);
    default: 
      return state;
  }
}

const extendCache = (state, videos = []) => {
  return {
    ...state,
    ...videos.reduce((cache, video) => {
      return Object.assign(cache, { [video.videoId]: video });
    }, {})
  }
}

export default videoCache;