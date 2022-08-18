import { CDECREMENT, CINCREMENET } from "./actionTypes";

const initialState = {
    products: [],
    totalItem: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CINCREMENET:
            let updateState = {
                ...state,
                products: [...state.products],
            };
            updateState.products = updateState.products.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        total: product.total + 1,
                    };
                }
                return { ...product };
            });

            if (
                updateState.products.filter(
                    (pEl) => pEl.id === action.payload.id
                ).length === 0
            ) {
                updateState.products.push({
                    id: action.payload.id,
                    total: 1,
                    price: action.payload.price,
                });
            }
            updateState.totalItem = updateState.totalItem + 1;
            updateState.totalPrice =
                updateState.totalPrice +
                updateState.products.filter(
                    (pEl) => pEl.id === action.payload.id
                )[0].price;
            return updateState;
        case CDECREMENT:
            let dUpdateState = {
                ...state,
                products: [...state.products],
            };
            dUpdateState.products = dUpdateState.products.map((product) => {
                if (product.id === action.payload.id) {
                    if (product.total > 0) {
                        return {
                            ...product,
                            total: product.total - 1,
                        };
                    }
                }
                return { ...product };
            });

            dUpdateState.totalItem = dUpdateState.totalItem - 1;
            dUpdateState.totalPrice =
                dUpdateState.totalPrice -
                dUpdateState.products.filter(
                    (pEl) => pEl.id === action.payload.id
                )[0].price;

            dUpdateState.products = dUpdateState.products.filter(
                (pEl) => pEl.total !== 0
            );
            return dUpdateState;

        default:
            return state;
    }
};

export default cartReducer;
