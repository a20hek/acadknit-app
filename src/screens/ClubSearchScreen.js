import {Box, Text, Input, Center} from 'native-base';
import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {getUser, clubByName} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';
import ClubSearchCard from '../../components/ClubSearchCard';
import SearchInput from '../../components/SearchInput';

export default function ClubSearchScreen({navigation}) {
  const route = useRoute();

  const [input, setInput] = useState(route?.params?.searchQuery);
  const [clubInfo, setClubInfo] = useState([]);

  async function searchClubs(searchQuery) {
    const clubData = await API.graphql(
      graphqlOperation(clubByName, {clubName: searchQuery}),
    );
    setClubInfo(clubData?.data?.clubByName?.items);
    console.log(clubData?.data?.clubByName?.items);
  }

  useEffect(() => {
    if (route?.params?.searchQuery) {
      searchClubs(input);
    }
  }, []);

  return (
    <Box flex={1} bg="#fff">
      <Center>
        {/* <Input
          type="search"
          w="90%"
          h="32px"
          placeholder="Search for clubs"
          value={input}
          onChangeText={text => setInput(text)}
          returnKeyType="go"
          onSubmitEditing={() => searchClubs(input)}
        /> */}
        <SearchInput
          value={input}
          onSubmitEditing={() => searchClubs(input)}
          onChangeText={text => setInput(text)}
          placeholder="Search for clubs"
        />
      </Center>
      {clubInfo &&
        clubInfo.map(item => (
          <ClubSearchCard
            clubName={item.clubName}
            clubID={item.id}
            clubDesc={item.clubDesc}
            key={item.id}
          />
        ))}
    </Box>
  );
}
