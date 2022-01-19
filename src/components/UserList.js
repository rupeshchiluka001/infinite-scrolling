import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import axios from 'axios';
import Progress from './Progress';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function UserList() {

    const [users, setUsers] = useState([]);
    let loadingTimeout = null;

    const getUsersList = async (number = 5) => {   
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${number}`);
        const tempUsers = [];

        response.data.results.forEach(user => {

          tempUsers.push({
            "name": `${user.name.first} ${user.name.first}`,
            "imgUrl": user.picture.medium,
          });

        });

        setUsers( users.concat(tempUsers) );
      }
      catch(err) {
        console.log("Err", err);
      }
    };

    const loadMoreUsers = () => {
      if ( !loadingTimeout ) {
        loadingTimeout = setTimeout(() => { getUsersList(); }, 1000);
      }
    }

    useEffect(() => {
        getUsersList(15);
    }, []);


    return (
        <>
          <InfiniteScroll
            dataLength={users.length}
            next={loadMoreUsers}
            hasMore={true}
            loader={ <Progress /> }
          >
            {users.map((user, index) => 
                <ListItem key={index} name={user.name} imgUrl={user.imgUrl}/>
            )}
          </InfiniteScroll>
        </>
    );
}