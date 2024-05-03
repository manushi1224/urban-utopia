const initialValue = {
  isLogin: false,
  userName: "",
};

export type User = {
  isLogin: boolean;
  userName: string;
};

type Action = {
  type: string;
  payload: string;
};

const userAuth = (state: User = initialValue, action: Action) => {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        isLogin: true,
        userName: action.payload,
      };

    case "user/logout":
      return {
        ...state,
        isLogin: false,
        userName: "",
      };

    default:
      return state;
  }
};

export default userAuth;
