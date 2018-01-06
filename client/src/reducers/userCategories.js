const userCategories = (state = [], action) => {
  switch (action.type) {
    case 'SETTING_INITIAL_CATEGORIES':
      return {
        ...state,
        totalCategories: action.categories
      }

    case 'ADDING_CATEGORY':
      return {
        ...state
      }
    case 'REMOVING_CATEGORY':
      return {
          ...state
      }

    default:
      return state;

  }

}

export default userCategories;
