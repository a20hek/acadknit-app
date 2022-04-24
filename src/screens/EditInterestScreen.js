import {
  View,
  Text,
  Box,
  Center,
  Container,
  Flex,
  Button,
  Input,
  VStack,
  FormControl,
  useToast,
  Badge,
  CloseIcon,
} from 'native-base';
import React from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';

export default function EditInterestScreen() {
  const route = useRoute();
  const userID = route?.params?.userData.id;
  const interestData = route?.params?.interestData;
  return (
    <View bg="#fff" flex={1} p="16px">
      <Text>EditInterestScreen</Text>
      <Text>{userID}</Text>
      <Flex direction="row" mt="8px" flexWrap="wrap">
        {interestData &&
          interestData?.map(interest => (
            <Box bgColor="#00BB9e" p="4px" rounded="sm" w="auto">
              <Flex direction="row" alignItems="center">
                <Text color="#fff" fontSize={10} m={2}>
                  {interest.interest.interestName}
                </Text>
                <CloseIcon color="#fff" size="10px" m={2} />
              </Flex>
            </Box>
          ))}
      </Flex>
    </View>
  );
}
