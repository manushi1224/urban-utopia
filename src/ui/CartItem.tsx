import { useDispatch } from "react-redux";
import { MinusButton, PlusButton } from "../assets/allSvgs";
import { Product } from "../reducer/products";

function CartItem({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <span>{product.title}</span>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-semibold">
          Quantity: {product.quantity}
        </p>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch({
                  type: "products/addProduct",
                  payload: product,
                });
              }}
            >
              <PlusButton />
            </button>
            <span>{product.quantity}</span>
            <button
              onClick={() => {
                if (product.quantity === 1) {
                  dispatch({
                    type: "products/removeProduct",
                    payload: product,
                  });
                  return;
                }
                dispatch({
                  type: "product/decrementProduct",
                  payload: product,
                });
              }}
            >
              <MinusButton />
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: "products/removeProduct",
                  payload: product,
                });
              }}
              className="text-aqua font-semibold hover:text-cyan-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
