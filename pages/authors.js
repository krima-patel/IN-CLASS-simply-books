import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const GetAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };
  useEffect(() => {
    GetAllAuthors();
  }, []);

  return (
    <div>
      {authors.map((authorObj) => (
        <AuthorCard key={authorObj.firebaseKey} authorObj={authorObj} onUpdate={GetAllAuthors} />
      ))}
    </div>
  );
}
