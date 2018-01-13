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

// Expects an array of videoIds
export const setPlaylistVideos = (videos) => {
  return {
    type: 'SET_PLAYLIST_VIDEOS',
    videos: videos
  }
}

export const setCurrentPlaylistType = (playlistType) => {
  return {
    type: 'SET_CURRENT_PLAYLIST_TYPE',
    playlistType: playlistType
  }
}

// Expects a single videoId
export const addRecentVideo = (videoId) => {
  return {
    type: 'ADD_RECENT_VIDEO',
    videoId: videoId
  }
}

export const removeRecentVideo = (videoId) => {
  return {
    type: 'REMOVE_RECENT_VIDEO',
    videoId: videoId
  }
}

export const addLikedVideo = (videoId, user) => {
  return {
    type: 'UPVOTE_VIDEO',
    videoId: videoId,
    user: user
  }
}

export const removeLikedVideo = (videoId, user) => {
  return {
    type: 'DOWNVOTE_VIDEO',
    videoId: videoId,
    user: user
  }
}

/*--------------------------*/
/* Specific User actions
/*--------------------------*/

export const setUserCategories = (preferences) => {
  return {
    type: 'SET_USER_CATEGORIES',
    preferences
  }
}

// Expects an array of video objects
export const setUserBookmarks = (bookmarks) => {
  return {
    type: 'SET_BOOKMARKED_VIDEOS',
    bookmarks
  }
}

export const setUserLikes = (likesArray) => {
  return {
    type: 'SET_USER_LIKES',
    likes: likesArray
  }
}

export const setUserDislikes = (dislikesArray) => {
  return {
    type: 'SET_USER_DISLIKES',
    dislikes: dislikesArray
  }
}


/*--------------------------*/
/* Account actions
/*--------------------------*/

export const getAllCategories = (categories) => {
  return {
    type: 'SETTING_INITIAL_CATEGORIES',
    categories: categories
  }
}


/*--------------------------*/
/* Top Videos
/*--------------------------*/
export const setTopVideos = (videos) => {
  return {
    type: 'SET_TOP_VIDEOS',
    videos: videos
  }
}

/*--------------------------*/
/* Mindfeed Videos
/*--------------------------*/
export const setMindfeedVideos = (videos) => {
  return {
    type: 'SET_MINDFEED_VIDEOS',
    videos: videos
  }
}

// Expects an array of videoIds
export const setCategoryVideos = (videos) => {
  return {
    type: 'SET_CATEGORY_VIDEOS',
    videos: videos
  }
}

export const setPlaylistIsLoading = (value) => {
  return {
    type: 'PLAYLIST_IS_LOADING',
    value: value
  }
}

// Expects an array of video objects
export const addToVideoCache = (videos) => {
  return {
    type: 'ADD_TO_VIDEO_CACHE',
    videos: videos
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
    // Set loading state so we don't call this repeatedly
    dispatch(setPlaylistIsLoading(true));
    return axios.get('/api/getPlaylistByCategory', {
      params: category
    })
    .then(({ data }) => {
      console.log('Category videos retrieved:', data);
      dispatch(dispatchVideosToPlaylist(data, 'category'));
    })
  }
}

export const getMindfeedPlaylist = (username) => {
  return (dispatch, getState) => {
    // Set loading state so we don't call this repeatedly
    dispatch(setPlaylistIsLoading(true));
    return axios.get('/api/getMindfeedPlaylist', {
      params: {
        email: username
      }
    })
   .then(({ data }) => {
      console.log('Mindfeed videos retrieved:', data);
      dispatch(dispatchVideosToPlaylist(data, 'mindfeed'));
   })
  }
}

export const dispatchVideosToPlaylist = (newVideosData, playlistType) => {
  return (dispatch, getState) => {
    const { currentPlaylist, currentVideo, videoCache } = getState();

    // Add new video objects to the global cache object
    dispatch(addToVideoCache(newVideosData));

    // Add videoIds to the category playlist
    const newVideosPlaylist = newVideosData.map(({ videoId }) => videoId);
    dispatch(setCategoryVideos(newVideosPlaylist));

    if (newVideosPlaylist.length) {
      dispatch(setPlaylistVideos([...currentPlaylist.videos, ...newVideosPlaylist]));
      dispatch(setCurrentVideo(newVideosData[0]));
      if (!currentVideo.videoId) {
        dispatch(updateVideoCounter(0));
      }
    } else {
      dispatch(updateVideoCounter(-1));
    }
    // So we know when API call is finished
    dispatch(setPlaylistIsLoading(false));
  }
}


/*--------------------------*/
/* Authenticate action */
/*--------------------------*/

export const setLoggedInStatus = (bool) => {
  return {
    type: 'TOGGLE_LOGGED_IN_STATUS',
    loggedIn: bool
  }
};

export const setCurrentUser = (email) => {
  return {
    type: 'SET_CURRENT_USER',
    currentUser: email
  }
};
