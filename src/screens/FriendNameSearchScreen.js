import {Box, Text} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {userByName} from '../graphql/queries';
// import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import SearchQueryContext from '../context/SearchQueryContext';
import FriendNameSearchCard from '../../components/FriendNameSearchCard';

export default function FriendNameSearchScreen() {
  // const route = useRoute();
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);
  // const query = route?.params?.searchQuery;

  const [userInfo, setUserInfo] = useState([]);
  // const [input, setInput] = useState(route?.params?.query);

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
      {userInfo &&
        userInfo.map(user => (
          <FriendNameSearchCard userData={user} key={user.id} />
        ))}
    </Box>
  );
}
