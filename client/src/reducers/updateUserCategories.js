const updateUserCategories = (state = [], action) => {
  switch (action.type) {


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

//export default updateUserCategories;
