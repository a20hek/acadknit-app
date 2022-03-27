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

export default function AddClubScreen({navigation}) {
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

  return (
    <Box bg="#fff" flex={1}>
      <VStack width="80%">
        {/* <FormControl>
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
          bg="#00B633"
          _text={{fontSize: 18, color: '#fff'}}
          top="40%"
          onPress={handleSubmit(onSignInPressed)}>
          Log In
        </Button> */}
      </VStack>
    </Box>
  );
}
