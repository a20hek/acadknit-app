import {
  Box,
  Center,
  Container,
  Text,
  Flex,
  Button,
  Input,
  VStack,
  FormControl,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';
import {updateUser} from '../graphql/mutations';
import {Alert} from 'react-native';

export default function EditPersonalInfoScreen({navigation}) {
  const route = useRoute();

  // const [name, setName] = useState(route?.params?.userData.name);
  // const [year, setYear] = useState(route?.params?.userData.year);
  // const [degree, setDegree] = useState(route?.params?.userData.degree);
  // const [email, setEmail] = useState(route?.params?.userData.email);
  const userID = route?.params?.userData.id;
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: route?.params?.userData.name,
      email: route?.params?.userData.email,
      year: route?.params?.userData.year,
      degree: route?.params?.userData.degree,
    },
  });

  const updateCredentials = async data => {
    const {name, email, year, degree} = data;
    try {
      await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: userID,
            name: name,
            email: email,
            year: year,
            degree: degree,
          },
        }),
      );
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              Your Personal Info has been successfully updated!
            </Box>
          );
        },
      });
      navigation.navigate('Profile');
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Box bg="#fff" flex={1} alignItems="center">
      <VStack width="80%">
        <FormControl>
          <FormControl.Label mt="8%" mb="-0.5px">
            Name
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              minLength: {
                value: 5,
                message: 'Name should be atleast 5 characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                placeholder="John Doe"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.name.message}
            </Text>
          )}
        </FormControl>

        <FormControl>
          <FormControl.Label mt="8%" mb="-0.5px">
            College email ID
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@student.mes.ac.in$/,
                message: 'Enter your student mail ID',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                type="email"
                size="lg"
                placeholder="john@gmail.com"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.email.message}
            </Text>
          )}
        </FormControl>

        <FormControl>
          <FormControl.Label mt="8%" mb="-0.5px">
            Degree
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              maxLength: {
                value: 20,
                message: 'Degree value is too long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                placeholder="B.Tech C.S."
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="degree"
          />
          {errors.name && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.degree.message}
            </Text>
          )}
        </FormControl>

        <FormControl>
          <FormControl.Label mt="8%" mb="-0.5px">
            Year
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              maxLength: {
                value: 20,
                message: 'Year value is too long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                placeholder="S.E."
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
              />
            )}
            name="year"
          />
          {errors.name && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.year.message}
            </Text>
          )}
        </FormControl>
        <Button
          mt="15%"
          bg="#00bb9e"
          _text={{fontSize: 18, color: '#fff'}}
          onPress={handleSubmit(updateCredentials)}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}
