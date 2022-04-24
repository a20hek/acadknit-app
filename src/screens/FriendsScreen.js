import {Box, Center, Container, Text, Flex, Button} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {listInterests, getUser} from '../graphql/queries';
import {createUserInterests} from '../graphql/mutations';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Alert} from 'react-native';
import SearchQueryContext from '../context/SearchQueryContext';
import UserContext from '../context/UserContext';

export default function FriendsScreen({navigation}) {
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [query, setQuery] = useState('');

  const userInfo = useContext(UserContext);
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);

  const userID = userInfo.id;

  function onMultiChange() {
    console.log(selectedInterests);
    return item => setSelectedInterests(xorBy(selectedInterests, [item], 'id'));
  }

  const getAllInterests = async () => {
    try {
      const interestslist = await API.graphql(graphqlOperation(listInterests));
      const interestInfo = interestslist.data.listInterests;
      if (interestslist) {
        const interestmap = interestInfo.items.map(({interestName, id}) => ({
          item: interestName,
          id,
        }));

        setInterests(interestmap);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getAllInterests();
  }, []);

  const submitInterest = async () => {
    for (let i = 0; i < selectedInterests.length; i++) {
      try {
        await API.graphql(
          graphqlOperation(createUserInterests, {
            input: {
              userID: userID,
              interestID: selectedInterests[i].id,
            },
          }),
        );
      } catch (e) {
        // Alert.alert(e.message);
      }
    }
  };

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
      {/* <Flex justifyContent="center" alignItems="center">
        <FriendReq />
      </Flex> */}
      <Center>
        <SelectBox
          width="80%"
          label="Select interests"
          options={interests}
          selectedValues={selectedInterests}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          arrowIconColor="#00bb9e"
          searchIconColor="#00bb9e"
          toggleIconColor="#00bb9e"
          isMulti
        />
      </Center>

      <Center>
        <Button m="16px" w="60%" onPress={submitInterest}>
          Submit
        </Button>
      </Center>
    </Box>
  );
}
