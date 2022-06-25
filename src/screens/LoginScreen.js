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
import {Auth} from 'aws-amplify';
import {Alert} from 'react-native';

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSignInPressed = async data => {
    try {
      const response = await Auth.signIn(data.email, data.password);
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Box flex={1} bg="#fff" alignItems="center">
      <Heading fontWeight="500" mt="5%" py="8%" color="#666">
        Log In
      </Heading>
      <VStack width="80%">
        <FormControl>
          <FormControl.Label mt="15px" mb="-0.5px">
            Email
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
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
          <FormControl.Label mt="15px" mb="-0.5px">
            Password
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                type="password"
                size="lg"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
                variant="underlined"
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
          bg="#00bb9e"
          _text={{
            fontSize: 16,
            color: '#fff',
            fontWeight: 700,
          }}
          mt="15%"
          onPress={handleSubmit(onSignInPressed)}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
}
