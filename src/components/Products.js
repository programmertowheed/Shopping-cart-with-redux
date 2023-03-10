import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cincrement } from "../redux/cart/actions";
import { increment } from "../redux/product/actions";

function Products() {
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const incrementHandler = (id, price) => {
        dispatch(cincrement(id, price));
        dispatch(increment(id));
    };

    return (
        <>
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div className="flex justify-between px-4 items-center">
                            <div className="text-lg font-semibold">
                                <p>
                                    {product.name} (
                                    {product.stock === 0 ? (
                                        <span className="text-red-600">
                                            Out of stock
                                        </span>
                                    ) : (
                                        product.stock
                                    )}
                                    )
                                </p>
                                <p className="text-gray-400 text-base">
                                    Tk {product.price}
                                </p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button
                                    onClick={() =>
                                        incrementHandler(
                                            product.id,
                                            product.price
                                        )
                                    }
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
