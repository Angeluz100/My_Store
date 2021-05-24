import { ActionTypes } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const setProducts = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: product,
    };
};