import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/product/actions";
import { cincrement, cdecrement } from "../redux/cart/actions";

function CartItems() {
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const incrementHandler = (id, price) => {
        dispatch(cincrement(id, price));
        dispatch(increment(id));
    };

    const decrementHandler = (id, price) => {
        dispatch(cdecrement(id, price));
        dispatch(decrement(id));
    };
    return (
        <>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {cart.products.length === 0 && (
                    <div className="text-xl flex justify-center items-center text-center mb-2">
                        <p>Empty cart</p>
                    </div>
                )}
                {cart.products?.map((cart) => (
                    <div
                        key={cart.id}
                        className="flex justify-between border-b-2 mb-2"
                    >
                        <div className="text-lg py-2">
                            <p>
                                {
                                    products.filter(
                                        (product) => product.id === cart.id
                                    )[0].name
                                }
                            </p>
                        </div>
                        <div className="text-lg py-2">
                            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                                <button
                                    onClick={() =>
                                        decrementHandler(cart.id, cart.price)
                                    }
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{cart.total}</p>
                                <button
                                    onClick={() =>
                                        incrementHandler(cart.id, cart.price)
                                    }
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{cart.totalItem}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItems;
