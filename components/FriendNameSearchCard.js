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
  Modal,
  Divider,
} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {createInvite} from '../src/graphql/mutations';
import UserContext from '../src/context/UserContext';

export default function FriendNameSearchCard({userData}) {
  const interests = userData?.interests?.items;
  const fromuserData = useContext(UserContext);

  const clubData = fromuserData?.joinedClubs?.items;

  const fromUser = fromuserData.name;
  const userID = userData.id;
  // const input = {userID: userID, fromUser: fromUser};

  const [showModal, setShowModal] = useState(false);

  const onSendInvite = async (clubID, clubName, clubDesc) => {
    try {
      await API.graphql(
        graphqlOperation(createInvite, {
          input: {
            userID: userID,
            clubID: clubID,
            fromUser: fromUser,
            clubName: clubName,
            clubDesc: clubDesc,
          },
        }),
      );
      setShowModal(false);
    } catch (e) {
      console.log(e.message);
    }
  };

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
            {userData.name}
          </Text>
        </Center>
        <Center>
          <Text color="#999" fontSize="12px">
            {userData.degree}
          </Text>
        </Center>
        <Flex direction="row" mt="2px" flexWrap="wrap" justifyContent="center">
          {interests &&
            interests?.map(interest => (
              <Badge
                bgColor="#00BB9e"
                rounded="sm"
                w="auto"
                _text={{
                  fontSize: 10,
                  color: '#fff',
                }}>
                {interest.interest.interestName}
              </Badge>
            ))}
        </Flex>
        <Center>
          <Button
            size="xs"
            bg="#A475C0"
            _text={{fontSize: '12px', fontWeight: 'bold'}}
            onPress={() => setShowModal(true)}
            w="70%">
            Invite
          </Button>
        </Center>
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Send Invite</Modal.Header>
          <Modal.Body>
            {clubData &&
              clubData.map(clubInfo => (
                <Box key={clubInfo.clubID}>
                  <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Text>{clubInfo.club.clubName}</Text>
                    <Button
                      size="xs"
                      _text={{fontSize: '12px', fontWeight: 'bold'}}
                      onPress={() => {
                        onSendInvite(
                          clubInfo.id,
                          clubInfo.club.clubName,
                          clubInfo.club.clubDesc,
                        );
                      }}>
                      Invite
                    </Button>
                  </Flex>
                  <Center>
                    <Divider m="6px" w="90%" />
                  </Center>
                </Box>
              ))}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
