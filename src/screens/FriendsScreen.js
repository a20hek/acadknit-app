import {Box, Center, Container, Text, Flex, Button} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SearchQueryContext from '../context/SearchQueryContext';
import UserContext from '../context/UserContext';

export default function FriendsScreen({navigation}) {
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [query, setQuery] = useState('');

  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);

  const handleKeyPress = () => {
    navigation.navigate('Friends Search', {
      screen: 'Interests',
    });
    setSearchQuery(query);
    setQuery('');
  };

  return (
    <Box w="100%" m="0" p="0" flex={1} backgroundColor="#fff">
      <Center>
        <SearchInput
          placeholder="Search by Interests or Name"
          value={query}
          onChangeText={text => setQuery(text)}
          onSubmitEditing={handleKeyPress}
        />
      </Center>
    </Box>
  );
}
