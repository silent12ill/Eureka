const userPreferences = ( state = { categories: [], subcategories: [] } , action ) => {
  switch(action.type){
    case 'SET_USER_PREFERENCES': //sets the categories and subcategories
      let preference = {
        categories: action.preferences.category,
        subcategories: action.preferences.subcategories
      }

      console.log('ACTIONNNNNNNN', action);

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