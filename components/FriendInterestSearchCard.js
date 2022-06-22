import {
  Text,
  Center,
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

export default function FriendInterestSearchCard({userData}) {
  const fromuserData = useContext(UserContext);

  const clubData = fromuserData?.joinedClubs?.items;

  const fromUser = fromuserData.name;
  const userID = userData.id;

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
      <Box px="16px" mx="16px" my="8px">
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <Flex>
            <Text color="#4d4d4d" fontSize="16px">
              {userData?.user?.name}
            </Text>
            <Text color="#999" fontSize="12px" mt="-2px">
              {userData.user.degree}
            </Text>
            <Flex direction="row" mt="2px">
              <Badge
                bgColor="#A475C0"
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
          </Flex>
          <Flex>
            <Button
              size="xs"
              bg="#00ab91"
              _text={{fontSize: '12px', fontWeight: 'bold'}}
              onPress={() => setShowModal(true)}>
              Invite
            </Button>
          </Flex>
        </Flex>
        <Divider mt="16px" />
      </Box>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Choose Club</Modal.Header>
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
                      bg="#00ab91"
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
                    <Divider m="6px" w="100%" />
                  </Center>
                </Box>
              ))}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
