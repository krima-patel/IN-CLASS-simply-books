/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

export default function AuthorCard({
  authorObj, onUpdate,
}) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authorObj.email}</Card.Subtitle>
          <Link href={`/author/${authorObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">DELETE</Button>
        </Card.Body>
      </Card>

      {/* <div>firebaseKey: {authorObj.firebaseKey}</div>
      <div>Email: {authorObj.email}</div>
      <div>First Name: {authorObj.first_name}</div>
      <div>Last Name: {authorObj.last_name}</div>
      <div>Favorite: {authorObj.favorite}</div>
      <img src={authorObj.image} alt={authorObj.first_name} /> */}
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
