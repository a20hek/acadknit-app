import {Box, Center, Container, Text, Flex} from 'native-base';
import React, {useState, useEffect} from 'react';
import FriendReq from '../../components/FriendReq';
import SearchInput from '../../components/SearchInput';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {listInterests} from '../graphql/queries';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Alert} from 'react-native';

export default function FriendsScreen() {
  const K_OPTIONS = [
    {
      item: 'Juventus',
      id: 'JUVE',
    },
    {
      item: 'Real Madrid',
      id: 'RM',
    },
    {
      item: 'Barcelona',
      id: 'BR',
    },
    {
      item: 'PSG',
      id: 'PSG',
    },
    {
      item: 'FC Bayern Munich',
      id: 'FBM',
    },
    {
      item: 'Manchester United FC',
      id: 'MUN',
    },
    {
      item: 'Manchester City FC',
      id: 'MCI',
    },
    {
      item: 'Everton FC',
      id: 'EVE',
    },
    {
      item: 'Tottenham Hotspur FC',
      id: 'TOT',
    },
    {
      item: 'Chelsea FC',
      id: 'CHE',
    },
    {
      item: 'Liverpool FC',
      id: 'LIV',
    },
    {
      item: 'Arsenal FC',
      id: 'ARS',
    },

    {
      item: 'Leicester City FC',
      id: 'LEI',
    },
  ];

  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  function onMultiChange() {
    return item => setSelectedInterests(xorBy(selectedInterests, [item], 'id'));
  }

  const getAllInterests = async () => {
    try {
      const interestslist = await API.graphql(graphqlOperation(listInterests));
      const interestInfo = interestslist.data.listInterests;
      if (interestslist) {
        setInterests(interestInfo.items);
        console.log(interests);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getAllInterests();
  }, []);

  return (
    <Box w="100%" m="0" p="0" flex={1} backgroundColor="#fff">
      <Center>
        <SearchInput placeholder="Search for friends" />
      </Center>
      {/* <Flex justifyContent="center" alignItems="center">
        <FriendReq />
      </Flex> */}

      <Center>
        <SelectBox
          width="80%"
          label="Select multiple"
          options={K_OPTIONS}
          selectedValues={selectedInterests}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </Center>

      {interests &&
        interests.map(interestInfo => <Text>{interestInfo.interestName}</Text>)}
    </Box>
  );
}
