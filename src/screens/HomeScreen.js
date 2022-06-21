import {Text, Center, Flex, Box, Button, ScrollView, View} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import PlusIcon from '../../components/PlusIcon';
import ClubCard from '../../components/ClubCard';
import {Alert} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../graphql/queries';
import SearchInput from '../../components/SearchInput';
import UserContext from '../context/UserContext';

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

  const userData = useContext(UserContext);
  const clubData = userData?.joinedClubs?.items;

  const AddClub = () => {
    return (
      <Button
        borderWidth="0.2px"
        borderColor="#666666"
        height="196px"
        w="176px"
        borderRadius="6px"
        padding="0"
        margin="8px"
        borderStyle="dashed"
        onPress={() => navigation.navigate('Add Club', {userData})}
        bg="#fff"
        _pressed={{background: '#fff'}}>
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
      </Button>
    );
  };

  const handleKeyPress = () => {
    navigation.navigate('Club Search', {searchQuery});
    setSearchQuery('');
  };

  return (
    <>
      {userData && (
        <View bg="#fff" flex={1}>
          <ScrollView>
            <Center>
              <SearchInput
                placeholder="Search for Clubs"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
                onSubmitEditing={handleKeyPress}
              />
            </Center>
            {/* <Text fontSize="16px" ml="24px" my="8px">
              Good Evening, {userData.name}
            </Text> */}
            <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
              {clubData &&
                clubData.map(clubInfo => (
                  <ClubCard
                    key={clubInfo.clubID}
                    clubID={clubInfo.clubID}
                    name={clubInfo.club.clubName}
                  />
                ))}

              <AddClub />
            </Flex>
          </ScrollView>
        </View>
      )}
    </>
  );
}
