export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type TypeProduct = {
  products: Product[];
};

type Action = {
  type: string;
  payload: Product;
};

const initialValue = {
  products: [],
};

const products = (state: TypeProduct = initialValue, action: Action) => {
  console.log(action.payload, "action.payload");
  switch (action.type) {
    case "products/addProduct":
      const ifProductExist = state.products.find((product: Product) => {
        return product.id === action.payload.id;
      });
      console.log(ifProductExist, "ifProductExist");
      if (ifProductExist) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }
    case "product/decrementProduct":
      return {
        ...state,
        products: state.products.map((product) => {
          console.log(
            product,
            "product",
            action.payload.id,
            "action.payload.id"
          );
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };
    case "products/removeProduct":
      return {
        ...state,
        products: state.products.filter(
          (product: Product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default products;
