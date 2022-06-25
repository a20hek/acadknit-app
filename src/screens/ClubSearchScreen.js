import {Box, Center} from 'native-base';
import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {clubByName} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';
import ClubSearchCard from '../../components/ClubSearchCard';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';

export default function ClubSearchScreen() {
  const route = useRoute();

  const [input, setInput] = useState(route?.params?.searchQuery);
  const [clubInfo, setClubInfo] = useState([]);

  async function searchClubs(searchQuery) {
    const clubData = await API.graphql(
      graphqlOperation(clubByName, {clubName: searchQuery}),
    );
    setClubInfo(clubData?.data?.clubByName?.items);
  }

  useEffect(() => {
    if (route?.params?.searchQuery) {
      searchClubs(input);
    }
  }, []);

  return (
    <Box flex={1} bg="#fff">
      <Center>
        <SearchInput
          value={input}
          onSubmitEditing={() => searchClubs(input)}
          onChangeText={text => setInput(text)}
          placeholder="Search for clubs"
        />
      </Center>
      {clubInfo && clubInfo.length > 0 ? (
        clubInfo.map(item => (
          <ClubSearchCard
            clubName={item.clubName}
            clubID={item.id}
            clubDesc={item.clubDesc}
            key={item.id}
          />
        ))
      ) : (
        <EmptyState query={input} />
      )}
    </Box>
  );
}
