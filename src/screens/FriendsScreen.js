import {
  Box,
  Center,
  Container,
  Text,
  Flex,
  Button,
  Heading,
  CloseIcon,
} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SearchQueryContext from '../context/SearchQueryContext';
import UserContext from '../context/UserContext';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {listInvites} from '../graphql/queries';
import {createUserClubs, deleteInvite} from '../graphql/mutations';

export default function FriendsScreen({navigation}) {
  const [query, setQuery] = useState('');
  const [invites, setInvites] = useState([]);

  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);
  const userData = useContext(UserContext);
  const userID = userData.id;

  const handleKeyPress = () => {
    navigation.navigate('Friends Search', {
      screen: 'Interests',
    });
    setSearchQuery(query);
    setQuery('');
  };

  async function getUserInvites() {
    const inviteInfo = await API.graphql(
      graphqlOperation(listInvites, {filter: {userID: {eq: userID}}}),
    );
    setInvites(inviteInfo?.data?.listInvites?.items);
  }

  useEffect(() => {
    getUserInvites();
  }, []);

  const onAcceptClick = async (clubID, id) => {
    try {
      await API.graphql(
        graphqlOperation(createUserClubs, {
          input: {
            userID: userID,
            clubID: clubID,
          },
        }),
      );
      try {
        await API.graphql(
          graphqlOperation(deleteInvite, {
            input: {
              id: id,
            },
          }),
        );
      } catch (e) {
        console.log(e.message);
      }
    } catch (e) {
      console.log(e.message);
    }
    const newInviteData = invites.filter(invite => invite.id !== id);
    setInvites(newInviteData);
  };

  const InviteCard = ({clubName, fromUser, clubID, id}) => {
    return (
      <Box
        borderWidth="0.2px"
        borderColor="#666666"
        height="auto"
        borderRadius="4px"
        py="8px"
        px="16px">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Flex>
            <Text fontSize="16px" fontWeight="bold">
              {clubName}
            </Text>
            <Text>From {fromUser}</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <Button
              height="36px"
              py="4px"
              px="8px"
              onPress={() => {
                onAcceptClick(clubID, id);
              }}>
              Accept
            </Button>
            <CloseIcon color="#000" size="10px" m={2} />
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <>
      <Center bg="#fff">
        <SearchInput
          placeholder="Search by Interests or Name"
          value={query}
          onChangeText={text => setQuery(text)}
          onSubmitEditing={handleKeyPress}
        />
      </Center>
      <Box w="100%" m="0" px="16px" flex={1} backgroundColor="#fff">
        <Heading fontSize="16px" fontWeight="semibold">
          Club Invites
        </Heading>
        {invites &&
          invites.map(invite => (
            <InviteCard
              clubName={invite.clubName}
              fromUser={invite.fromUser}
              clubID={invite.clubID}
              key={invite.id}
              id={invite.id}
            />
          ))}
        {invites.length == 0 && <Text>You don't have any new invites</Text>}
        {/* <FriendReq /> */}
      </Box>
    </>
  );
}
