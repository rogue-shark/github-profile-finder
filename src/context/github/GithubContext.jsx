import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
  };
  //using reducer hook - useReducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();
    // console.log(data)
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //get individual user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      window.location = '/notfound'; //redirecting to notfound page
    } else {
      const data = await res.json();
      // console.log(data)
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  //getting user repos (recent 10 repos )
  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    )

    const data = await response.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }


  //CLEARing users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
