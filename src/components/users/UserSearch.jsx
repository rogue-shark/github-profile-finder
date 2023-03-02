import { FaSearch } from 'react-icons/fa';
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext)
  //SEARCH
  const handleChange = (e) => setText(e.target.value);
  //SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('PLease enter something', 'error'); //type = error
    } else {
      searchUsers(text);
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 ? (
        <div>
          <button
            onClick={clearUsers} 
            className='btn btn-outline btn-lg '
          >
            Clear
          </button>
        </div>
      ) : (<div>A much better way to experience GitHub while you browse it! Go on, the floor is yours.</div>) }
    </div>
  );
}

export default UserSearch;
