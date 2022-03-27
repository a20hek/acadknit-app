import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import {Box, Input, FormControl, VStack, Button} from 'native-base';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {createUser} from '../graphql/mutations';

export default function ConfirmEmailScreen({navigation}) {
  const route = useRoute();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: route?.params?.email,
      password: route?.params?.password,
      name: route?.params?.name,
      college: route?.params?.college,
    },
  });

  const username = watch('username');

  const onConfirmPressed = async data => {
    await Auth.confirmSignUp(data.username, data.code);
    try {
      await Auth.signIn(data.username, data.password);
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.signInUserSession.accessToken.payload.sub;
      try {
        await API.graphql(
          graphqlOperation(createUser, {
            input: {
              id: userId,
              email: data.username,
              name: data.name,
              college: data.college,
            },
          }),
        );
      } catch (e) {
        Alert.alert(e.message);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Code was resent to your email');
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Box flex={1} bg="#fff" alignItems="center">
      <VStack width="80%">
        <FormControl>
          <FormControl.Label mt="15px" mb="-0.5px">
            Enter your Confirmation Code
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: 'Code is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="lg"
                onBlur={onBlur}
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="code"
          />
          {errors.code && (
            <Text color="red.500" fontWeight="light" fontSize="12px">
              {errors.code.message}
            </Text>
          )}
        </FormControl>
        <Button
          bg="#00B633"
          _text={{fontSize: 18, color: '#fff'}}
          top="40%"
          onPress={handleSubmit(onConfirmPressed)}>
          Confirm Email
        </Button>
      </VStack>
    </Box>
  );
}
