import React from 'react'
import PropTypes from 'prop-types';

export default function UserGreeting(props) {
    const welcomeMessage = <h1>Welcome, {props.username}</h1>;
    const welcomeGuest = <h1>Welcome, Guest</h1>;

  return (props.isLoggedIn ? welcomeMessage : welcomeGuest);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string.isRequired,
  }
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}