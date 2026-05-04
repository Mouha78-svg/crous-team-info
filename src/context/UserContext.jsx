import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import dataTeam from "../data";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const searchUsers = (text) => {
    // const params = new URLSearchParams({ q: text });
    const items = dataTeam.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(text.toLowerCase()),
    );
    setLoading();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
    // Implementation for fetching users
  };
  const getUser = (id) => {
    setLoading();
    dispatch({
      type: "GET_USER",
      payload: dataTeam.find((user) => user.id == id),
    });
  };
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
