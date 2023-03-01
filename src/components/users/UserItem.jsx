import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


function UserItem({ user: { login, avatar_url } }) {
  return (
    //NOTE: card class -> part of daisyUI
    <div className='card shadow-md compact side bg-base-300'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt="profile avatar" />
                </div>
            </div>
        </div>
        <div>
            <h2 className="card-title">{login}</h2>
            <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>See Profile</Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
