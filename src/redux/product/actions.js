import { DECREMENT, INCREMENET } from "./actionTypes";

export const increment = (id) => {
    return {
        type: INCREMENET,
        payload: { id: id },
    };
};

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: { id: id },
    };
};
