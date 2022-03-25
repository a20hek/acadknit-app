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
  Divider,
  Input,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import PlusIcon from '../../components/PlusIcon';
import ClubCard from '../../components/ClubCard';
import {Auth} from 'aws-amplify';
import {StreamChat} from 'stream-chat';
import {OverlayProvider} from 'stream-chat-react-native';
import {Alert} from 'react-native';

const API_KEY = '6m2jd92u2puu';
const Client = StreamChat.getInstance(API_KEY);

const AddClub = () => {
  return (
    <Box
      borderWidth="0.2px"
      borderColor="#666666"
      height="196px"
      w="176px"
      borderRadius="6px"
      padding="0"
      margin="8px"
      borderStyle="dashed"
      border>
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
    </Box>
  );
};

export default function HomeScreen() {
  const [sub, setSub] = useState(null);
  const [name, setName] = useState(null);

  const fetchAuthorizedUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const attributes = await Auth.userAttributes(authUser);
      const user = {
        sub: findAttributeInList(attributes, 'sub'),
        name: findAttributeInList(attributes, 'name'),
      };
      setSub(user.sub);
      setName(user.name);
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const ConUser = async (sub, name) => {
    try {
      await Client.connectUser(
        {
          id: sub,
          name: name,
        },
        Client.devToken(sub),
      );
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const findAttributeInList = (list, attr) =>
    list
      .filter(e => e.Name === attr)
      .map(e => e.Value)
      .find(e => e);

  useEffect(() => {
    fetchAuthorizedUser();
    if (sub != null) {
      ConUser(sub, name);
    }
  }, []);

  const signOut = () => {
    Auth.signOut();
    Client.disconnectUser();
  };
  return (
    <Box>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        <ClubCard name="Random" imgUrl="https://picsum.photos/176/154" />
        <ClubCard name="Hello" imgUrl="https://picsum.photos/176/154" />
        <AddClub />
      </Flex>
      <Center>
        <Button onPress={signOut}>Sign Out</Button>
      </Center>
    </Box>
  );
}
