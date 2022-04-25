import {Box, Text, ScrollView, Input, View, Center, Button} from 'native-base';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {Auth, API, graphqlOperation} from 'aws-amplify';

import {messagesbyClub} from '../graphql/queries';
import {createMessage} from '../graphql/mutations';
import {onCreateMessage} from '../graphql/subscriptions';

export default function ClubChatScreen() {
  const route = useRoute();
  const clubID = route?.params?.clubID;

  const [userID, setUserID] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState('');

  useEffect(() => {
    if (clubID) {
      getMessages();
    }
  }, []);

  useEffect(() => {
    getUserID();
  }, []);

  useEffect(() => {
    try {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage, {owner: userID}),
      ).subscribe({
        next: event => {
          setMessages([...messages, event.value.data.onCreateMessage]);
        },
      });
      console.log(messages);
      return () => {
        subscription.unsubscribe();
      };
    } catch (e) {
      console.log(e.message);
    }
  }, [messages]);

  const getUserID = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    setUserID(currentUser.attributes.sub);
  };

  const getMessages = async () => {
    const retriveMessages = await API.graphql(
      graphqlOperation(messagesbyClub, {clubID: clubID, sortDirection: 'ASC'}),
    );
    const messageData = retriveMessages.data.messagesbyClub.items;
    setMessages(messageData);
    console.log(messages);
  };

  useEffect(() => {
    if (message && message.length) {
      setShow('Send');
    } else {
      setShow('');
    }
  }, [message]);

  const onMessageSend = async () => {
    try {
      await API.graphql(
        graphqlOperation(createMessage, {
          input: input,
        }),
      );
    } catch (e) {
      console.warn(e);
    }
    setMessage('');
  };

  const input = {content: message, clubID: clubID};

  return (
    <View bg="#fff" flex={1} p="16px">
      <ScrollView>
        <Text>ClubChatScreen</Text>
        <Text>ClubID is {clubID}</Text>
        {messages &&
          messages.map(messagemapped => (
            <Box p="8px" bg="#00bb9e" m="2px" rounded="md" w="auto">
              {/* <Text></Text> */}
              <Text>{messagemapped.content}</Text>
            </Box>
          ))}
      </ScrollView>
      <View>
        <Center>
          <Input
            placeholder="Message..."
            bottom="5px"
            size="lg"
            w="96%"
            rounded="full"
            onChangeText={text => setMessage(text)}
            value={message}
            maxLength={1000}
            InputRightElement={
              <Button
                mr="16px"
                _text={{color: '#00bb9e', fontWeight: 'bold', fontSize: '16px'}}
                color="#00bb9e"
                variant="unstyled"
                onPress={onMessageSend}>
                {show}
              </Button>
            }
          />
        </Center>
      </View>
    </View>
  );
}
