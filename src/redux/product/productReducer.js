import { DECREMENT, INCREMENET } from "./actionTypes";

const initialState = [
    {
        id: 1,
        name: "Asus Vivobook X515MA",
        price: 35500,
        total: 20,
        stock: 20,
    },
    {
        id: 2,
        name: "Dell E1916HV 18.5 Inch",
        price: 9300,
        total: 35,
        stock: 35,
    },
    {
        id: 3,
        name: "Canon Eos 4000D 18MP",
        price: 36500,
        total: 72,
        stock: 72,
    },
];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENET:
            return state.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        stock: p.stock - 1,
                    };
                }
                return { ...p };
            });
        case DECREMENT:
            return state.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        stock: p.stock + 1,
                    };
                }
                return { ...p };
            });

        default:
            return state;
    }
};

export default productReducer;
