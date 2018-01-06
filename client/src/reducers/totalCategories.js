const totalCategories = (state = {}, action) => {
    switch (action.type) {
        case: 'SETTING_INITIAL_CATEGORIES': return {
            ...state,
            totalCategories: action.categories
        }

        default: return state;
    }
}

//export default totalCategories;