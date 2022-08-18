import { CINCREMENET, CDECREMENT } from "../cart/actionTypes";
import { INCREMENET, DECREMENT } from "../product/actionTypes";

// create our first middleware
const productStock = (store) => (next) => (action) => {
    const id = action.payload.id;
    const { product } = store.getState();
    const thisProduct = product.filter((p) => p.id === id);

    if (action.type === INCREMENET || action.type === CINCREMENET) {
        if (thisProduct[0].stock !== 0) {
            // pass action
            return next(action);
        }
    }
    if (action.type === DECREMENT || action.type === CDECREMENT) {
        if (thisProduct[0].stock !== thisProduct[0].total) {
            // pass action
            return next(action);
        }
    }
};

export default productStock;
