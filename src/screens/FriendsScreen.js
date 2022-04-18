import {Box, Center, Container, Text, Flex, Button} from 'native-base';
import React, {useState, useEffect} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {listInterests, getUser} from '../graphql/queries';
import {createUserInterests} from '../graphql/mutations';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Alert} from 'react-native';

export default function FriendsScreen() {
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [userID, setUserID] = useState('');

  function onMultiChange() {
    console.log(selectedInterests);
    return item => setSelectedInterests(xorBy(selectedInterests, [item], 'id'));
  }

  const getUserData = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
      const currentUserData = await API.graphql(
        graphqlOperation(getUser, {id: currentUser.attributes.sub}),
      );
      const currentUserInfo = currentUserData.data.getUser.id;

      if (currentUser) {
        setUserID(currentUserInfo);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

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

  useEffect(() => {
    getUserData();
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
      {selectedInterests &&
        selectedInterests.map(item => <Text>{item.item}</Text>)}
      <Center>
        <Button m="16px" w="60%" onPress={submitInterest}>
          Submit
        </Button>
      </Center>
    </Box>
  );
}
