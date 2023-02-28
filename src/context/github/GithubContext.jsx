import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false
  }
  //using reducer hook - useReducer
  const [state, dispatch] = useReducer(githubReducer, initialState)
  
  //Get search results
  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items} = await res.json();
    // console.log(data)
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  };

  //CLEARing users from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  //set loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};


export default GithubContext