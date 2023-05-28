import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    loading: false,
    loaded: false,
    currentPageNews: 1,
    currentPagePodcast: 1,
    currentCategoryPodcast: "podcast",
    currentCategorySize: 1
};

const setCurrentPageNews = (state, action) => {
    return updateObject(state,{
        currentPageNews: action.currentPageNews
    });
};

const setCurrentPagePodcast = (state, action) => {
    return updateObject(state,{
        currentPagePodcast: action.currentPagePodcast
    });
};

const setCurrentCategoryPodcast = (state, action) => {
    return updateObject(state,{
        currentCategoryPodcast: action.currentCategoryPodcast
    });
};

const setCurrentCategorySize = (state, action) => {
    return updateObject(state,{
        currentCategorySize: action.currentCategorySize
    });
};

const reducer = (state =initialState, action) => {
    
    switch (action.type){           

        case actionTypes.SET_CURRENT_PAGE_NEWS:
            return setCurrentPageNews(state, action); 

        case actionTypes.SET_CURRENT_PAGE_PODCAST:
            return setCurrentPagePodcast(state, action); 

        case actionTypes.SET_CURRENT_CATEGORY_PODCAST:
            return setCurrentCategoryPodcast(state, action); 

        case actionTypes.SET_CURRENT_CATEGORY_SIZE:
            return setCurrentCategorySize(state, action); 

        default:
            return state;
    }
};

export default reducer;