import * as actionTypes from './actionTypes';

export const setShowPopup = (showPopup) => {
    return {
        type: actionTypes.SET_SHOW_POPUP,
        showPopup: showPopup    
    }
}
