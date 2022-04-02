import {Auth, API, graphqlOperation} from 'aws-amplify';
import {
  Box,
  Input,
  FormControl,
  VStack,
  Button,
  Text,
  Heading,
} from 'native-base';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {createClub, createUserClubs} from '../graphql/mutations';
import {Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function AddClubScreen({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      clubName: '',
      clubDesc: '',
    },
  });

  const route = useRoute();

  const onCreateClub = async data => {
    const {clubName, clubDesc} = data;
    const clubData = await API.graphql(
      graphqlOperation(createClub, {
        input: {clubName: clubName, clubDesc: clubDesc},
      }),
    );
    try {
      await API.graphql(
        graphqlOperation(createUserClubs, {
          input: {
            userID: route?.params?.userData.id,
            clubID: clubData.data.createClub.id,
          },
        }),
      );
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  //   try {
  //     await API.graphql(
  //       graphqlOperation(createClub, {
  //         input: {
  //           clubName: clubName,
  //           clubDesc: clubDesc,
  //           // joinedUsers: {items: {userID: route?.params?.userData.id}},
  //         },
  //       }),
  //     );
  //   } catch (e) {
  //     Alert.alert(e.message);
  //   }
  // };

  // const clubData=await API.graphql(graphqlOperation(
  //   createClub,{
  //     input:'hello'
  //   }
  // ))

  // const newClub= clubData.data.createClub;
  // await API.graphql(graphqlOperation(createUserClubs,{input:'hello'}))

  return (
    <Box bg="#fff" flex={1} alignItems="center">
      <VStack width="80%">
        <FormControl>
          <FormControl.Label mt="15px" mb="-0.5px">
            Club Name
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                placeholder="Club Name"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="clubName"
          />
          {errors.clubName && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.clubName.message}
            </Text>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label mt="15px" mb="-0.5px">
            Club Description
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="clubDesc"
          />
          {errors.clubDesc && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.clubDesc.message}
            </Text>
          )}
        </FormControl>
        <Button
          bg="#00B633"
          _text={{fontSize: 18, color: '#fff'}}
          top="40%"
          onPress={handleSubmit(onCreateClub)}>
          Create Club
        </Button>
      </VStack>
    </Box>
  );
}
