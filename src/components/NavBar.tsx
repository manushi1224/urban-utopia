import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../assets/allSvgs";
import brandImage from "../assets/urbanutopia.png";
import { RootState } from "../ui/Card";
import Cart from "./Cart";

function NavBar() {
  const userAuth = useSelector((state: RootState) => state.userAuth);
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [cart, setCart] = useState<boolean>(false);

  return (
    <nav className=" bg-primary p-4 border-b-2 border-gray-400">
      <ul className=" flex gap-5 justify-between">
        <li className="text-secondary-900 font-semibold text-xl">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">
            <img src={brandImage} alt="" className=" w-64" />
          </Link>
        </li>
        {!userAuth.isLogin && (
          <li className="font-semibold text-xl">
            <Link to="/login">Login</Link>
          </li>
        )}
        {userAuth.isLogin && (
          <div className="flex gap-4">
            <li className="font-semibold text-xl">
              <button
                onClick={() => {
                  dispatch({ type: "user/logout" });
                }}
              >
                Logout
              </button>
            </li>
            <li className="cursor-pointer font-semibold text-xl">
              <span onClick={() => setCart(!cart)} className="flex gap-2">
                <span className="mt-1">
                  <CartIcon />
                </span>
                <span className="flex gap-2">
                  My Cart
                  <span className="border px-2 rounded-full">
                    {products.length}
                  </span>
                </span>
              </span>
              {cart && <Cart setCart={setCart} cart={cart} />}
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
