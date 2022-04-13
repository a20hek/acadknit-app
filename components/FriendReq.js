import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Flex,
  Image,
  Box,
  Button,
  FlatList,
  Container,
  Badge,
} from 'native-base';
import React from 'react';
import FriendAcceptIcon from './FriendAcceptIcon';
import FriendRejectIcon from './FriendRejectIcon';

export default function FriendReq() {
  return (
    <Box
      borderWidth="0.2px"
      borderColor="#666666"
      height="auto"
      w="90%"
      borderRadius="4px"
      padding="8px"
      margin="8px">
      <Flex flexDir="row">
        <Flex>
          <Text fontSize="16px">Abhishek Ajithkumar</Text>
          <Text fontSize="12px" color="#999999">
            S.E. B.Tech
          </Text>

          <Box
            position="relative"
            mt="5px"
            mb="5px"
            borderRadius="5px"
            w="120px"
            maxW="400px"
            bg="#00BB9E">
            <Text fontWeight="bold" color="#fff" textAlign="center">
              React.JS
            </Text>
          </Box>
        </Flex>
        <Flex flexDir="row">
          <Box bg="#A475C0" h="42px" w="38px">
            <FriendAcceptIcon />
          </Box>
          <Box bg="#E82F2F" h="42px" w="38px">
            <FriendRejectIcon />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
