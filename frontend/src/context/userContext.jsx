import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from './reducers/userReducer';

const INITIAL_STATE = {
  user: JSON.parse(window.localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
