import { CDECREMENT, CINCREMENET } from "./actionTypes";

export const cincrement = (id, price) => {
    return {
        type: CINCREMENET,
        payload: {
            id: id,
            price: price,
        },
    };
};

export const cdecrement = (id, price) => {
    return {
        type: CDECREMENT,
        payload: {
            id: id,
            price: price,
        },
    };
};
