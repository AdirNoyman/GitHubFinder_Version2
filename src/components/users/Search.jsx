import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  handelSubmit = e => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  handelChange = e => this.setState({ [e.target.name]: e.target.value });

  handelClear = e => this.props.clearUsers();

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    users: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  render() {
    const { text } = this.state;
    const { users } = this.props;

    return (
      <div>
        <form className='form' onSubmit={this.handelSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={this.handelChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {users && (
          <button
            className='btn btn-light btn-block'
            onClick={this.handelClear}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
