import {
  Box,
  Input,
  FormControl,
  VStack,
  Button,
  Text,
  Select,
  CheckIcon,
  Heading,
  Flex,
} from 'native-base';
import React from 'react';
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
      college: '',
    },
  });

  const onRegisterPressed = async data => {
    const {email, password, name, college} = data;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {email, name},
      });
      navigation.navigate('Confirm Email', {email, name, password, college});
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Box flex={1} bg="#fff" alignItems="center">
      <Heading fontWeight="500" mt="5%" py="5%" color="#666">
        Create Account
      </Heading>
      <VStack width="80%">
        <FormControl my="6px">
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
        <FormControl my="6px">
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

        <FormControl my="6px">
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

        <FormControl my="6px">
          <FormControl.Label mt="15px">College</FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: 'College is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Select
                onBlur={onBlur}
                onValueChange={val => onChange(val)}
                selectedValue={value}
                placeholder="Zugzwang College of Endgame"
                variant="underlined"
                size="lg"
                _selectedItem={{
                  // bg: 'teal.600',
                  endIcon: (
                    <Flex flexDir="row" alignItems="center">
                      <CheckIcon size={5} color="#00bb9e" />,
                    </Flex>
                  ),
                }}
                mt="1">
                <Select.Item label="Pillai College" value="Pillai College" />
              </Select>
            )}
            name="college"
          />
          {errors.college && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.college.message}
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
          onPress={handleSubmit(onRegisterPressed)}>
          Continue
        </Button>
      </VStack>
    </Box>
  );
}
