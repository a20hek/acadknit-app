import {Box, Center, Container, Text, Flex} from 'native-base';
import React, {useState, useEffect} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {listInterests} from '../graphql/queries';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Alert} from 'react-native';

export default function FriendsScreen() {
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  function onMultiChange() {
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

        console.log(interests);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getAllInterests();
  }, []);

  return (
    <Box w="100%" m="0" p="0" flex={1} backgroundColor="#fff">
      <Center>
        <SearchInput placeholder="Search for friends" />
      </Center>
      {/* <Flex justifyContent="center" alignItems="center">
        <FriendReq />
      </Flex> */}

      <Center>
        <SelectBox
          width="80%"
          label="Select multiple"
          options={interests}
          selectedValues={selectedInterests}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </Center>
      {selectedInterests &&
        selectedInterests.map(item => <Text>{item.item}</Text>)}
    </Box>
  );
}
