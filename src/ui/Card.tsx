import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Star } from "../assets/allSvgs";
import Skeleton from "./Skeleton";
import { User } from "../reducer/userAuth";
import { Product, TypeProduct } from "../reducer/products";

export type RootState = {
  userAuth: User;
  products: TypeProduct;
};

function Card(): JSX.Element {
  const [products, setProducts] = useState<Product[]>();
  const dispatch = useDispatch();
  const userAuth = useSelector((state: RootState) => state.userAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const addToCart = (productId: number) => {
    const fetchProductById = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch({
        type: "products/addProduct",
        payload: response.data,
      });
    };

    fetchProductById();
  };

  if (!products) {
    return <Skeleton />;
  }

  return (
    <>
      {products.map((product: Product) => {
        return (
          <div
            className="max-w-md mx-auto rounded-xl border border-black overflow-hidden shadow-md hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] p-4 flex flex-col justify-between h-auto gap-4"
            key={product.id}
          >
            <img
              src={product.image}
              alt="Sunset in the mountains"
              className="w-full h-44 object-contain"
            ></img>
            <div className=" py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">
                {product.description.slice(0, 100)}...
              </p>
            </div>
            <div className="flex items-center">
              <Star />
              <p className="ms-2 text-sm font-bold text-gray-900">
                {product.rating.rate}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900 underline hover:no-underline ">
                {product.rating.count} reviews
              </span>
            </div>
            <div className="flex items-center justify-between bottom-52">
              <span className="font-bold text-lg">${product.price}</span>
              <button
                onClick={() => {
                  !userAuth.isLogin
                    ? navigate("/login")
                    : addToCart(product.id);
                }}
                disabled={!userAuth.isLogin}
                className="bg-secondary-900 hover:bg-red-400 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
