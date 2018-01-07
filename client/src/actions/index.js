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

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGGED_IN_STATUS
  }
}

// Expects a single video object
export const addRecentVideo = (video) => {
  return {
    type: 'ADD_RECENT_VIDEO',
    video: video
  }
}

export const removeRecentVideo = (video) => {
  return {
    type: 'REMOVE_RECENT_VIDEO',
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
/* Navigation actions
/*--------------------------*/

export const setCurrentNavigation = (page) => {
  return {
    type: 'SET_CURRENT_NAVIGATION',
    page: page
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

export const setCategoryVideos = (videos) => {
  return {
    type: 'SET_CATEGORY_VIDEOS',
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
    return axios.get('/api/getPlaylistByCategory', {
        params: category
      })
      .then((response) => {
        const videos = response.data;
        console.log('Category videos retrieved:', videos);
        console.log('Category params still in scope:', category);
        dispatch(setCategoryVideos(videos));

        const { videos: currentPlaylist, currentVideo } = getState().currentPlaylist;
        if(!currentPlaylist.length) {
          dispatch(setPlaylistVideos(videos));
        }
        if(!currentVideo.videoId && videos.length) {
          dispatch(setCurrentVideo(videos[0]));
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const getMindfeedPlaylist = (username) => {
  return (dispatch, getState) => {
    return axios.get('/api/getMindfeedPlaylist', {
        params: username
      })
      .then((response) => {
        const videos = response.data;
        console.log('Mindfeed videos retrieved:', videos);
        dispatch(setMindfeedVideos(videos));

        const { videos: currentPlaylist, currentVideo } = getState().currentPlaylist;
        if(!currentPlaylist.length) {
          dispatch(setPlaylistVideos(videos));
        }
        if(!currentVideo.videoId) {
          dispatch(setCurrentVideo(videos[0]));
        }
      })
      .catch((error) => {
        console.log(error);
      })
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

export const authUser = (userObject) => {
  return (dispatch, getState) => {

  }
}


//
// export const authUser = (userObject) => {
//     console.log("before");
//   return (dispatch, getState) => {
//     return axios.get('/api/signin', {
//       params: userObject
//     }).then((response) => {
//       const { authStatus: loggedIn, currentUser } = getState().authStatus;
//
//       if(response.status === 201) {
//         dispatch(setLoggedInStatus(true));
//         dispatch(setCurrentUser(response.data.email));
//
//       } else if(response.status === 200) {
//         dispatch(setLoggedInStatus(true));
//         dispatch(setCurrentUser(response.data.email));
//       }
//     }).catch((error) => {
//       console.log(error);
//     })
//   }
// };
