import {Box, SimpleGrid, Text, Flex, Center} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {interestByInterestName} from '../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import SearchQueryContext from '../context/SearchQueryContext';
import FriendInterestSearchCard from '../../components/FriendInterestSearchCard';

export default function FriendInterestSearchScreen() {
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);
  const [interestInfo, setInterestInfo] = useState([]);

  async function searchbyInterest(query) {
    const interestData = await API.graphql(
      graphqlOperation(interestByInterestName, {interestName: query}),
    );
    setInterestInfo(
      interestData?.data?.interestByInterestName?.items[0]?.users?.items,
    );
    // console.log(userData?.data?.userByName?.items);
    console.log(interestInfo);
  }

  useEffect(() => {
    if (searchQuery) {
      searchbyInterest(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Box bg="#fff" flex={1}>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        {interestInfo &&
          interestInfo.map(user => (
            <FriendInterestSearchCard userData={user} key={user.user.id} />
          ))}
      </Flex>
    </Box>
  );
}
