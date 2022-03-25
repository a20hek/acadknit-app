import {
  Box,
  Input,
  FormControl,
  VStack,
  Button,
  Text,
  Select,
  CheckIcon,
} from 'native-base';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {Alert} from 'react-native';

export default function RegistrationScreen({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onRegisterPressed = async data => {
    const {email, password, name} = data;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {email, name},
      });
      navigation.navigate('Confirm Email', {email, name, password});
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Box flex={1} bg="#fff" alignItems="center">
      <VStack width="80%">
        <FormControl>
          <FormControl.Label mt="15px" mb="-0.5px">
            Name
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: 'Name is required',
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
          <FormControl.Label mt="15px" mb="-0.5px">
            Enter your college email ID
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
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
          <FormControl.Label mt="15px" mb="-0.5px">
            Password
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be atleast 8 characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                type="password"
                size="lg"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.password.message}
            </Text>
          )}
        </FormControl>
        <Button
          bg="#00B633"
          _text={{fontSize: 18, color: '#fff'}}
          top="40%"
          onPress={handleSubmit(onRegisterPressed)}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
}
