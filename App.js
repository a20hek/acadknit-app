/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
  Spinner,
  Box,
} from 'native-base';

import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {Auth, Hub} from 'aws-amplify';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import FeedScreen from './src/screens/FeedScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginOrSignupScreen from './src/screens/LoginOrSignupScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

import HomeIcon from './components/HomeIcon';
import FeedIcon from './components/FeedIcon';
import FriendsIcon from './components/FriendsIcon';
import ProfileIcon from './components/ProfileIcon';

import AddClubScreen from './src/screens/AddClubScreen';
import ClubChatScreen from './src/screens/ClubChatScreen';
import ClubSearchScreen from './src/screens/ClubSearchScreen';

import SearchInput from './components/SearchInput';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Club Search"
        component={ClubSearchScreen}
        // options={{headerShadowVisible: false}}
      />
      <HomeStack.Screen
        name="ClubChat"
        component={ClubChatScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <HomeStack.Screen name="Add Club" component={AddClubScreen} />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'HomeTab') return <HomeIcon color={color} />;
          else if (route.name === 'Friends')
            return <FriendsIcon color={color} />;
          else if (route.name === 'Feed') return <FeedIcon color={color} />;
          else if (route.name === 'Profile')
            return <ProfileIcon color={color} />;
        },
        tabBarActiveTintColor: '#00BB9E',
        tabBarInactiveTintColor: '#8c8c8c',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MyNavigator() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  });

  if (user === undefined) {
    return (
      <Box>
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </Box>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        {user ? (
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Login or Register"
              component={LoginOrSignupScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <MyNavigator />
    </NativeBaseProvider>
  );
}
