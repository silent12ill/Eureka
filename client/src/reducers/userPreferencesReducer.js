const userPreferences = ( state = { categories: [], subcategories: [], bookmarks: [], likes:[], dislikes:[] } , action ) => {
  switch(action.type){
    case 'SET_USER_PREFERENCES': //sets the categories and subcategories
      return {
        ...state,
        categories: action.preferences.category,
        subcategories: action.preferences.subcategories
      };

    case 'SET_USER_BOOKMARKS':
      return {
        ...state,
        userBookmarks: action.bookmarks
      }


    default:
      return state;
  }
}


export default userPreferences;