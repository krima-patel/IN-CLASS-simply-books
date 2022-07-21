import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(firebaseKey);

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div>
      <h3>
        {authorDetails.first_name} {authorDetails.last_name}
      </h3>
      <h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      </h5>
      <div className="container booksContainer">
        {authorDetails.books?.map((book) => (
          <BookCard
            key={book.firebaseKey}
            bookObj={book}
            onUpdate={() => {
              viewAuthorDetails(firebaseKey).then(setAuthorDetails);
            }}
          />
        ))}
      </div>
    </div>
  );
}
