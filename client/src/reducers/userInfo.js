const userInfo = (state = { userCategories: [], userBookmarks: [], userLikes: [], userDislikes: [] }, action) => {
  switch (action.type) {

    case 'SET_USER_CATEGORIES':
      return {
        ...state,
        userCategories: action.preferences
      };
    case 'SET_BOOKMARKED_VIDEOS':
      return {
        ...state,
        userBookmarks: action.bookmarks
      };

    case 'SET_USER_LIKES':
      return {
        ...state,
        userLikes: action.likes
      };

    case 'UPDATE_USER_LIKES':
      return {
        ...state,
        userLikes: action.likes
      };

    case 'SET_USER_DISLIKES':
      return {
        ...state,
        userDislikes: action.dislikes
      };

    case 'UPDATE_USER_DISLIKES':
      return {
        ...state,
        userDislikes: action.dislikes
      };
    default:
      return state;
  }

};








export default userInfo;
