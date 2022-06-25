import {Box} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {userByName} from '../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import SearchQueryContext from '../context/SearchQueryContext';
import FriendNameSearchCard from '../../components/FriendNameSearchCard';
import EmptyState from '../../components/EmptyState';

export default function FriendNameSearchScreen() {
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);

  const [userInfo, setUserInfo] = useState([]);

  async function searchbyName(query) {
    const userData = await API.graphql(
      graphqlOperation(userByName, {name: query}),
    );
    setUserInfo(userData?.data?.userByName?.items);
  }

  useEffect(() => {
    if (searchQuery) {
      searchbyName(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Box bg="#fff" flex={1}>
      {userInfo && userInfo.length > 0 ? (
        userInfo.map(user => (
          <FriendNameSearchCard userData={user} key={user.id} />
        ))
      ) : (
        <EmptyState query={searchQuery} />
      )}
    </Box>
  );
}
