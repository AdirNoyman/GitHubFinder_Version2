import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = ({}) => {
  const githubContext = useContext(GithubContext);
  const { users, clearUsers, EmptySearchAlert } = githubContext;

  // Define state Hook
  const [text, setText] = useState('');

  // Methods

  const handelSubmit = e => {
    e.preventDefault();

    if (text === '') {
      EmptySearchAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const handelChange = e => setText(e.target.value);

  const handelClear = e => clearUsers();

  return (
    <div>
      <form className='form' onSubmit={handelSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={handelChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
