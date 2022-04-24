import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
  Spinner,
  Badge,
  Box,
  Flex,
  Button,
} from 'native-base';
import React, {useState, useEffect} from 'react';

export default function FriendInterestSearchCard({userData}) {
  //   const interests = userData.interests.items;

  return (
    <>
      <Box
        borderWidth="0.3px"
        borderRadius="10px"
        //   h="160px"
        w="150px"
        borderColor="#4d4d4d"
        p="8px"
        m="16px">
        <Center>
          <Text my="8px" color="#4d4d4d" fontSize="16px" textAlign="center">
            {userData?.user?.name}
          </Text>
        </Center>
        <Center>
          <Text color="#999" fontSize="12px">
            {userData.user.degree}
          </Text>
        </Center>
        <Flex direction="row" mt="2px" flexWrap="wrap" justifyContent="center">
          {/* {userData.interests &&
            interests?.map(interest => ( */}
          <Badge
            bgColor="#00BB9e"
            rounded="sm"
            w="auto"
            _text={{
              fontSize: 10,
              color: '#fff',
            }}>
            {userData.interest.interestName}
          </Badge>
          {/* ))} */}
        </Flex>
        {/* <Button size="xs">Send Invite</Button> */}
      </Box>
    </>
  );
}
