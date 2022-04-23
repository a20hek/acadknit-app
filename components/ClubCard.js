import {Box, Text, Flex, Image, Button} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ClubCard({name, imgUrl, clubID}) {
  const navigation = useNavigation();
  return (
    <Button
      borderWidth="0.2px"
      borderColor="#666666"
      height="196px"
      w="176px"
      borderRadius="6px"
      padding="0px"
      margin="8px"
      bg="#fff"
      _pressed={{background: '#fff'}}
      onPress={() =>
        navigation.navigate('ClubChat', {
          name: name,
          clubID: clubID,
        })
      }>
      <Flex flexDir="column">
        <Image
          borderTopRadius="6px"
          h="154px"
          w="176px"
          source={{uri: 'https://picsum.photos/176/154'}}
          alt="Alternate Text"
        />
        <Box p="8px">
          <Text fontWeight="medium" fontSize="16px" w="100%">
            {name}
          </Text>
        </Box>
      </Flex>
    </Button>
  );
}
