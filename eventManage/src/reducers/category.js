import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils/updateObject';

const initialState = {
    categoryList: [],
    loading: false,
    categoryIconList: [],
    categoryDetail: []
};

const categoryStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const categorySuccess = (state, action) => {
    return updateObject(state, {
        categoryList: action.categoryList,
        loading: false
    });
};

const addCategory = (state, action) => {
    const mergeNewCategory = [...state.categoryList, ...action.addCategoryObj];
    return updateObject(state, {
        categoryList: mergeNewCategory,
        loading: false
    })
};

const categoryFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const removedCategory = (state, action) => {
    return updateObject(state, {
        categoryList: state.categoryList.filter((obj) => obj.categoryId !== action.categoryId),
        loading: false
    });
};

const categoryIconList = (state, action) => {
    return updateObject(state, {
        categoryIconList: action.iconList
    })
}

const editCategoryStart = (state, action) => {
    return updateObject(state, {});
};

const categoryUpdate = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_START: return categoryStart(state, action);
        case actionTypes.CATEGORY_SUCCESS: return categorySuccess(state, action);
        case actionTypes.CATEGORY_FAIL: return categoryFail(state, action);
        case actionTypes.REMOVED_CATEGORY: return removedCategory(state, action);
        case actionTypes.CATEGORY_LIST: return categoryIconList(state, action);
        case actionTypes.ADD_CATEGORY: return addCategory(state, action);
        case actionTypes.START_EDIT_CATEGORY: return editCategoryStart(state, action);
        case actionTypes.UPDATE_CATEGORY: return categoryUpdate(state, action);

        default: return state;
    }
};

export default reducer;