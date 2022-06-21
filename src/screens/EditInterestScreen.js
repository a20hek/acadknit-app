import {
  View,
  Text,
  Box,
  Center,
  Container,
  Flex,
  Button,
  Input,
  VStack,
  FormControl,
  useToast,
  Badge,
  CloseIcon,
  Pressable,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';
import {listUserInterests, listInterests} from '../graphql/queries';
import {createUserInterests, deleteUserInterests} from '../graphql/mutations';

import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

export default function EditInterestScreen() {
  const route = useRoute();
  const userID = route?.params?.userData.id;

  const [interestData, setInterestData] = useState([]);
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  async function getInterests() {
    const interestInfo = await API.graphql(
      graphqlOperation(listUserInterests, {filter: {userID: {eq: userID}}}),
    );
    setInterestData(interestInfo?.data?.listUserInterests?.items);
  }

  useEffect(() => {
    getInterests();
  }, []);

  const handleDelete = async id => {
    try {
      await API.graphql(
        graphqlOperation(deleteUserInterests, {input: {id: id}}),
      );
    } catch (e) {
      // console.warn(e.message);
    }
    const newInterestData = interestData.filter(interest => interest.id !== id);
    setInterestData(newInterestData);
  };

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
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

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

  useEffect(() => {
    getAllInterests();
  }, []);

  return (
    <View bg="#fff" flex={1} p="16px">
      <Flex direction="row" mt="8px" flexWrap="wrap" mb="16px">
        {interestData &&
          interestData?.map(interest => (
            <Box
              bgColor="#00BB9e"
              p="4px"
              rounded="sm"
              w="auto"
              m="8px"
              key={interest.id}>
              <Flex direction="row" alignItems="center">
                <Text color="#fff" fontSize={10} m={2}>
                  {interest.interest.interestName}
                </Text>
                {/* <Pressable > */}
                <CloseIcon
                  color="#fff"
                  size="10px"
                  m={2}
                  onPress={() => handleDelete(interest.id)}
                />
                {/* </Pressable> */}
              </Flex>
            </Box>
          ))}
      </Flex>
      {/* <Text fontWeight="bold">Add New Interests</Text> */}
      <Center>
        <SelectBox
          width="80%"
          label="Add New Interests"
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
        <Button m="16px" w="60%" onPress={submitInterest} top="20%">
          Save
        </Button>
      </Center>
    </View>
  );
}
