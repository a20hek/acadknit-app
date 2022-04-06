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
} from 'native-base';
import React, {useEffect, useState} from 'react';
import PlusIcon from '../../components/PlusIcon';
import ClubCard from '../../components/ClubCard';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Alert} from 'react-native';
import {getUser, getClub} from '../graphql/queries';

export default function HomeScreen({navigation}) {
  const [userData, setUserData] = useState([]);
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    getUserData();
    // getClubData();
  }, []);

  const getUserData = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
      const currentUserData = await API.graphql(
        graphqlOperation(getUser, {id: currentUser.attributes.sub}),
      );
      const currentUserInfo = currentUserData.data.getUser;

      // const joinedClubData = await API.graphql(
      //   graphqlOperation(getClub, {userID: currentUser.attributes.sub}),
      // );

      // const currentUserClubInfo = joinedClubData.data.getClub;

      if (currentUser) {
        setUserData(currentUserInfo);
        console.log(userData.joinedClubs);
        // setClubData(currentUserClubInfo);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const AddClub = () => {
    return (
      <Button
        borderWidth="0.2px"
        borderColor="#666666"
        height="196px"
        w="176px"
        borderRadius="6px"
        padding="0"
        margin="8px"
        borderStyle="dashed"
        onPress={() => navigation.navigate('Add Club', {userData})}
        bg="#fff"
        _pressed={{background: '#fff'}}>
        <Flex flexDir="column">
          <Center mt="42px">
            <PlusIcon />
            <Box p="8px">
              <Text fontWeight="medium" fontSize="16px" color="#999999">
                Create a Club
              </Text>
            </Box>
          </Center>
        </Flex>
      </Button>
    );
  };

  const signOut = () => {
    Auth.signOut();
  };

  async function getClubData(item) {
    const joinedClubData = await API.graphql(
      graphqlOperation(getClub, {id: item}),
    );
    return <Text>{joinedClubData?.data?.getClub?.clubName}</Text>;
  }

  return (
    <>
      {userData && (
        <Box bg="#fff" flex={1}>
          <Text fontSize="16px" ml="8px" mt="8px">
            Hello, {userData.name} from {userData.college}
          </Text>
          <Center>
            <Input
              type="search"
              w="90%"
              h="32px"
              placeholder="Search for clubs"
            />
          </Center>
          <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
            {/* <ClubCard name="Random" />
            <ClubCard name="Hello" /> */}
            {/* {userData?.joinedClubs?.items?.map(
              item => item && getClubData(item.clubID),
            )} */}
            <AddClub />
          </Flex>
          <Center>
            <Button onPress={signOut}>Sign Out</Button>
          </Center>
        </Box>
      )}
    </>
  );
}
