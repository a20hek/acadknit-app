import {Box, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {userByName} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';

export default function FriendNameSearchScreen() {
  const route = useRoute();
  // const searchQuery = route?.params?.searchQuery;

  const [userInfo, setUserInfo] = useState([]);
  const [input, setInput] = useState(route?.params?.searchQuery);

  async function searchbyName(searchQuery) {
    const userData = await API.graphql(
      graphqlOperation(userByName, {name: searchQuery}),
    );
    setUserInfo(userData?.data?.userByName?.items);
    console.log(userData?.data?.userByName?.items);
  }

  useEffect(() => {
    if (route?.params?.searchQuery) {
      searchbyName(input);
    }
  }, []);

  return (
    <Box bg="#fff" flex={1}>
      {userInfo && <Text>FriendNameSearchScreen {input}</Text>}
    </Box>
  );
}
