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
  Divider,
} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import {getUser} from '../graphql/queries';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import UserContext from '../context/UserContext';

export default function ProfileScreen({navigation}) {
  const userData = useContext(UserContext);
  const interestData = userData.interests?.items;

  const ListButton = ({text, onPress, txtclr}) => {
    return (
      <>
        <Divider />
        <Pressable onPress={onPress}>
          <Box w="100%" my="10px">
            <Text textAlign="left" fontSize="18px" color={txtclr || '#000'}>
              {text}
            </Text>
          </Box>
        </Pressable>
      </>
    );
  };

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <Box bg="#fff" flex={1} p="32px">
      <Heading
        fontSize="28px"
        fontFamily="body"
        fontWeight={100}
        fontStyle="normal">
        {userData.name}
      </Heading>
      <Text fontSize="16px" mt="8px">
        {userData.college}
      </Text>
      <Flex direction="row" mt="8px" flexWrap="wrap">
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
              }}
              key={interest.interest.interestID}>
              {interest.interest.interestName}
            </Badge>
          ))}
        {/* </HStack> */}
      </Flex>
      <Box mt="32px">
        <ListButton
          text="Edit Personal Info"
          onPress={() => navigation.navigate('Edit Personal Info', {userData})}
          key="editpro"
        />
        <ListButton
          text="Edit Interests"
          onPress={() =>
            navigation.navigate('Edit Interests', {
              interestData: interestData,
              userData: userData,
            })
          }
          key="editint"
        />

        <ListButton
          text="Log Out"
          txtclr="#E53935"
          onPress={signOut}
          key="logout"
        />
      </Box>
    </Box>
  );
}
