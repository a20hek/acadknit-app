import {Box, Text, Button, Icon, Divider, Flex} from 'native-base';
import {Path} from 'react-native-svg';
import BlackLogo from '../../components/BlackLogo';

import React from 'react';

export default function LoginOrSignupScreen({navigation}) {
  return (
    <Box alignItems="center" bg="#fff" flex={1}>
      <Box mt="20%">
        <BlackLogo />
      </Box>
      <Box alignItems="center" width="80%" mt="20%">
        <Text font="WorkSans-Medium" fontWeight="500" color="#808080">
          Sign Up or Log In to continue
        </Text>
        <Button
          onPress={() => navigation.navigate('Register')}
          variant="subtle"
          size="lg"
          bg="#00B633"
          _text={{fontWeight: 'bold', color: 'white', fontSize: '16px'}}
          width="90%"
          height="48px"
          borderRadius="10px"
          my="12px"
          mt="10%">
          Register
        </Button>
        <Button
          onPress={() => navigation.navigate('Login')}
          variant="outline"
          _text={{fontWeight: 'bold', color: '#00B633'}}
          size="lg"
          borderRadius="10px"
          my="12px"
          borderColor="#00B633"
          width="90%">
          Log In
        </Button>
      </Box>
    </Box>
  );
}
