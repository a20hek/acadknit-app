import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Input,
  Flex,
  Box,
  Button,
  ScrollView,
  FlatList,
  Badge,
  Pressable,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {getUser} from '../graphql/queries';
import {Auth, API, graphqlOperation} from 'aws-amplify';

export default function ProfileScreen({navigation}) {
  const [userData, setUserData] = useState([]);
  const [interestData, setInterestData] = useState([]);

  const getUserData = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
      const currentUserData = await API.graphql(
        graphqlOperation(getUser, {id: currentUser.attributes.sub}),
      );
      const currentUserInfo = currentUserData.data.getUser;

      if (currentUser) {
        setUserData(currentUserInfo);
        setInterestData(currentUserInfo.interests?.items);
        console.log(interestData);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const ListButton = ({text, onPress, txtclr}) => {
    return (
      <Pressable onPress={onPress}>
        <Box w="100%" my="10px">
          <Text textAlign="left" fontSize="18px" color={txtclr || '#000'}>
            {text}
          </Text>
        </Box>
      </Pressable>
    );
  };

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <Box bg="#fff" flex={1} p="32px">
      <Heading fontSize="28px">{userData.name}</Heading>
      <Text fontSize="16px" mt="8px">
        {userData.college}
      </Text>
      <Flex direction="row" mt="8px">
        {/* <HStack
          space={{
            base: 2,
            sm: 4,
          }}
          mx={{
            base: 'auto',
            md: 0,
          }}> */}
        {interestData &&
          interestData.map(interest => (
            <Badge
              bgColor="#00BB9e"
              // w="50px"
              rounded="sm"
              w="auto"
              _text={{
                fontSize: 10,
                color: '#fff',
              }}>
              {interest.interest.interestName}
            </Badge>
          ))}
        {/* </HStack> */}
      </Flex>
      <Box mt="32px">
        <ListButton
          text="Edit Personal Info"
          onPress={() => navigation.navigate('Edit Personal Info', {userData})}
        />
        <ListButton
          text="Edit Interests"
          onPress={() => navigation.navigate('Edit Interests', {interestData})}
        />

        <ListButton text="Log Out" txtclr="#E53935" onPress={signOut} />
      </Box>
    </Box>
  );
}
