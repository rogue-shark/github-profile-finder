import { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import UserItem from './UserItem';

function UserResults() {
  const [users, setUsers] = useState([]); //default = empty []
  const [loading, setLoading] = useState(true); //default=true

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();
    // console.log(data)
    setUsers(data);
    setLoading(false);
  };

  if(!loading) {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cold-3 md:grid-cols-2'>
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      );
  } else {
      return <Loading />
  }

}

export default UserResults;
