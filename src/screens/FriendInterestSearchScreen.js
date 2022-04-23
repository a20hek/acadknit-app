import {Box, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {interestByInterestName} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';

export default function FriendInterestSearchScreen() {
  const route = useRoute();
  // const [input, setInput] = useState(route?.params?.searchQuery);
  const searchQuery = route?.params?.searchQuery;

  return (
    <Box bg="#fff" flex={1}>
      {searchQuery && <Text>FriendInterestSearchScreen {searchQuery}</Text>}
    </Box>
  );
}
