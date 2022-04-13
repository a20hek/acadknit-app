import {Box, Center, Container, Text, Flex} from 'native-base';
import React from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';

export default function FriendsScreen() {
  return (
    <Box w="100%" m="0" p="0" flex={1} backgroundColor="#fff">
      <Center>
        <SearchInput placeholder="Search for friends" />
      </Center>
      <Flex justifyContent="center" alignItems="center">
        <FriendReq />
      </Flex>
    </Box>
  );
}
