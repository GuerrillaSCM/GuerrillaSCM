import * as actionTypes from '../actions/actions'

const initialState = {
    page_index: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SWITCH_PAGE:
            //console.log("This ran and index is: " + action.page_index);
            return {
                ...state,
                //change the page index
                page_index: action.page_index
            }
        default: return state;
    }
}

export default reducer;