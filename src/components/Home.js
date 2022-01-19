import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicMenu from './BasicMenu';
import axios from 'axios';
import ListItem from './ListItem';

function Home() {
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsersList = (number) => {    
    axios.get(`https://randomuser.me/api/?results=${number}`)
      .then((response) => {

        const tempUsers = [];

        response.data.results.forEach((user, index) => {

          tempUsers.push({
            "name": `${user.name.first} ${user.name.first}`,
            "imgUrl": user.picture.medium
          });

        });

        setUsers(tempUsers);

      })
      .catch((err) => {
        console.log("Err", err);
      });
  }

  useEffect(() => {
    if ( sessionStorage.getItem("token") ) {
      getUsersList(20);
    }
    else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <BasicMenu />
        {users.map((user, index) => 
              <ListItem key={index} name={user.name} imgUrl={user.imgUrl}/>
        )}
    </>
  );
}

export default Home;
