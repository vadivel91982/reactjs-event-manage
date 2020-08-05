import axiosInstance from '../utils/axiosInstance';
import { toastr } from 'react-redux-toastr';
import * as actionTypes from './actionTypes';
import toastrOptions from '../utils/toastrOption';

export const categoryStart = () => {
    return {
        type: actionTypes.CATEGORY_START
    };
};

export const categorySuccess = (data) => {
    return {
        type: actionTypes.CATEGORY_SUCCESS,
        categoryList: data
    };
};

export const categoryAdded = (data) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        addCategoryObj: data
    };
};

export const categoryFail = (error) => {
    return {
        type: actionTypes.CATEGORY_FAIL,
        error: error
    };
};

export const removedCategory = (id) => {
    return {
        type: actionTypes.REMOVED_CATEGORY,
        categoryId: id
    };
};

export const iconList = (data) => {
    return {
        type: actionTypes.CATEGORY_LIST,
        iconList: data
    };
};

export const removeCategory = (catId) => async dispatch => {
    dispatch(categoryStart());
    try {
        await axiosInstance.delete(`/category/delete/${catId}`);
        dispatch(removedCategory(catId));
        toastr.success('Category', 'Delete successfully!', toastrOptions);
    } catch (err) {
        dispatch(categoryFail(err.response));
    }
}

export const createCategory = (fieldsData) => async dispatch => {
    dispatch(categoryStart());
    try {
        const categoryAdd = await axiosInstance.post('/category/create', fieldsData);
        const categoryReturnRecord = categoryAdd?.data?.category;
        const returnCategoryData = [{
            "iconClass": categoryReturnRecord.class,
            "name": categoryReturnRecord.name,
            "group": fieldsData?.group,
            "colorCode": categoryReturnRecord.colorcode,
            "uniCode": categoryReturnRecord.unicode,
            "value": categoryReturnRecord.value,
            "description": categoryReturnRecord.description,
            "createdDate": categoryReturnRecord.createdAt,
            "categoryId": categoryReturnRecord._id
        }]
        dispatch(categoryAdded(returnCategoryData));
        toastr.success('Category', 'Created Successfully!', toastrOptions);
    } catch (err) {
        dispatch(categoryFail(err.response));
    }
}

export const startEditCategory = () => async dispatch => {
    return {
        type: actionTypes.START_EDIT_CATEGORY
    };
}

export const GetEditCategory = (data) => async dispatch => {
    return {
        type: actionTypes.GET_EDIT_CATEGORY,
        categoryDetail: data
    };
}

export const updateCategory = (data, id) => async dispatch => {
    try {
        const res = await axiosInstance.put(`/category/update/${id}`, data);
        dispatch({
            type: actionTypes.UPDATE_CATEGORY,
            payload: res.data.category
        });
        dispatch(startEditCategory());
    } catch (err) {
        dispatch(categoryFail(err.response));
    }
}

export const categoryList = () => async dispatch => {
    try {
        dispatch(categoryStart());
        const categoryList = await axiosInstance.get('/event-list');
        const categoryItemList = categoryList.data.data;
        dispatch(categorySuccess(categoryItemList));
    } catch (err) {
        dispatch(categoryFail(err.response.data.error));
    }
}
