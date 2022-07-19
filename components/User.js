import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>User</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Image: {image}</div>
      <div>Last Login: {lastLogin}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'Krima',
  email: 'krima@gmail.com',
  image: 'https://d.newsweek.com/en/full/1970093/labrador-puppy.jpg',
  lastLogin: '07/15/2022 14:00:00',
};
