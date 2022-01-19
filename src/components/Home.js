import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicMenu from './BasicMenu';
import UserList from './UserList';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if ( !sessionStorage.getItem("token") ) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <BasicMenu />
      <UserList/>
    </>
  );
}

export default Home;
