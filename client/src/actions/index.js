import axios from 'axios';

/*--------------------------*/
/* Playlist Actions
/*--------------------------*/

// Expects a single video object
export const setCurrentVideo = (video) => {
  return {
    type: 'SET_CURRENT_VIDEO',
    video: video
  }
};

// Expects a counter single integer counter
export const updateVideoCounter = (counter) => {
  return {
    type: 'UPDATE_VIDEO_COUNTER',
    counter: counter
  }
}

// Expects an array of videos
export const setPlaylistVideos = (videos) => { 
  return {
    type: 'SET_PLAYLIST_VIDEOS',
    videos: videos
  }
}

// Expects a single video object
export const addRecentVideo = (video) => {
  return {
    type: 'ADD_RECENT_VIDEO',
    video: video
  }
}

export const addBookmarkedVideo = (videoId) => {
  return {
    type: 'ADD_BOOKMARKED_VIDEO',
    videoId: videoId
  }
}

export const removeBookmarkedVideo = (videoId) => {
  return {
    type: 'REMOVE_BOOKMARKED_VIDEO',
    videoId: videoId
  }
}

/*--------------------------*/
/* Navigation actions
/*--------------------------*/

export const setCurrentNavigation = (page) => {
  return {
    type: 'SET_CURRENT_NAVIGATION',
    page: page
  }
}



/*--------------------------*/
/* Async actions
/*--------------------------*/

// Uses redux-thunk middleware for async action
// Allows you to wait for a response from a 
// server before updating Redux store
export const getPlaylistByCategory = (category) => {
  return (dispatch, getState) => {
    return axios.get('/api/getPlaylistByCategory', {
        params: category
      })
      .then((response) => {
        var videos = response.data;
        console.log('Videos retrieved:', videos);
        dispatch(setPlaylistVideos(videos));
        dispatch(setCurrentVideo(videos[0]));
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
