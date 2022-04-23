import {Box, Text} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {interestByInterestName} from '../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import SearchQueryContext from '../context/SearchQueryContext';

export default function FriendInterestSearchScreen() {
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);
  const [interestInfo, setInterestInfo] = useState([]);

  async function searchbyInterest(query) {
    const interestData = await API.graphql(
      graphqlOperation(interestByInterestName, {interestName: query}),
    );
    setInterestInfo(interestData);
    // console.log(userData?.data?.userByName?.items);
    console.log(interestInfo);
  }

  useEffect(() => {
    if (searchQuery) {
      searchbyInterest(searchQuery);
    }
  }, []);

  return (
    <Box bg="#fff" flex={1}>
      {searchQuery && <Text>FriendInterestSearchScreen {searchQuery}</Text>}
    </Box>
  );
}
