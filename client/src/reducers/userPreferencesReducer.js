const userPreferences = ( state = { categories: [], subcategories: [] } , action ) => {
  switch(action.type){
    case 'SET_USER_PREFERENCES': //sets the categories and subcategories
      return {
        ...state,
        categories: action.preferences.category,
        subcategories: action.preferences.subcategories
      }


    default:
      return state;
  }
}


export default userPreferences;