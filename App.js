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
  HStack,
  Heading,
  NativeBaseProvider,
  Spinner,
  Box,
  extendTheme,
  ChevronLeftIcon,
} from 'native-base';

import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {Auth, Hub, API, graphqlOperation} from 'aws-amplify';
import {getUser} from './src/graphql/queries';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import FeedScreen from './src/screens/FeedScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import StepOneScreen from './src/screens/StepOneScreen';
import StepTwoScreen from './src/screens/StepTwoScreen';
import LoginOrSignupScreen from './src/screens/LoginOrSignupScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

import HomeIcon from './components/HomeIcon';
import FeedIcon from './components/FeedIcon';
import FriendsIcon from './components/FriendsIcon';
import ProfileIcon from './components/ProfileIcon';

import AddClubScreen from './src/screens/AddClubScreen';
import ClubChatScreen from './src/screens/ClubChatScreen';
import ClubSearchScreen from './src/screens/ClubSearchScreen';

import EditPersonalInfoScreen from './src/screens/EditPersonalInfoScreen';
import EditInterestScreen from './src/screens/EditInterestScreen';

import FriendNameSearchScreen from './src/screens/FriendNameSearchScreen';
import FriendInterestSearchScreen from './src/screens/FriendInterestSearchScreen';

import SearchInput from './components/SearchInput';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import UserContext from './src/context/UserContext';
import SearchQueryContext from './src/context/SearchQueryContext';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

Auth.configure(awsconfig);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const FriendStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const AccountSetup = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

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
        options={{
          headerTitle: () => (
            <Text fontWeight={500} fontSize="20px" color="#333">
              Club Search
            </Text>
          ),
        }}
      />
      <HomeStack.Screen
        name="ClubChat"
        component={ClubChatScreen}
        options={({route}) => ({
          headerTitle: () => (
            <Text fontWeight={500} fontSize="20px" color="#333">
              {route.params.name}
            </Text>
          ),
        })}
      />
      <HomeStack.Screen
        name="Add Club"
        component={AddClubScreen}
        options={{
          headerTitle: () => (
            <Text fontWeight={500} fontSize="20px" color="#333">
              Add Club
            </Text>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function FriendStackScreen() {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <SearchQueryContext.Provider value={{searchQuery, setSearchQuery}}>
      <FriendStack.Navigator>
        <FriendStack.Screen
          name="Friends"
          component={FriendsScreen}
          options={{headerShown: false}}
        />
        <FriendStack.Screen
          name="Friends Search"
          component={TopTabNav}
          options={{
            headerTitle: props => (
              <SearchInput
                placeholder="Search.."
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
                {...props}
              />
            ),
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShadowVisible: false,
          }}
        />
      </FriendStack.Navigator>
    </SearchQueryContext.Provider>
  );
}

function TopTabNav() {
  return (
    <TopTab.Navigator
      initialRouteName="Interests"
      tabBarActiveTintColor="#00bb9e"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: '#00bb9e'},
        tabBarLabelStyle: {
          fontSize: 10,
          textTransform: 'capitalize',
          margin: 0,
          padding: 0,
          alignContent: 'center',
        },
        tabBarItemStyle: {height: 40, margin: 0, padding: 0},
      }}>
      <TopTab.Screen name="Interests" component={FriendInterestSearchScreen} />
      <TopTab.Screen name="Classmates" component={FriendNameSearchScreen} />
    </TopTab.Navigator>
  );
}

function AccountSetupNav() {
  return (
    <AccountSetup.Navigator>
      <AccountSetup.Screen
        name="Step One"
        component={StepOneScreen}
        options={{headerShown: false}}
      />
      <AccountSetup.Screen
        name="Step Two"
        component={StepTwoScreen}
        options={{headerShown: false}}
      />
    </AccountSetup.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="Edit Personal Info"
        component={EditPersonalInfoScreen}
        options={{
          headerTitle: () => (
            <Text fontWeight={500} fontSize="20px" color="#333">
              Edit Personal Info
            </Text>
          ),
        }}
      />
      <ProfileStack.Screen
        name="Edit Interests"
        component={EditInterestScreen}
        options={{
          headerTitle: () => (
            <Text fontWeight={500} fontSize="20px" color="#333">
              Edit Interests
            </Text>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

function TabNavigator() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
      if (currentUser) {
        const currentUserData = await API.graphql(
          graphqlOperation(getUser, {id: currentUser.attributes.sub}),
        );

        const currentUserInfo = currentUserData.data.getUser;
        setUserData(currentUserInfo);
      }
    } catch (e) {
      console.warn(e.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={userData}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            if (route.name === 'HomeTab') return <HomeIcon color={color} />;
            else if (route.name === 'FriendsTab')
              return <FriendsIcon color={color} />;
            else if (route.name === 'Feed') return <FeedIcon color={color} />;
            else if (route.name === 'ProfileTab')
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
        <Tab.Screen
          name="FriendsTab"
          component={FriendStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Account Setup"
          component={AccountSetupNav}
          options={{
            tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </UserContext.Provider>
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
          <Spinner accessibilityLabel="Loading" />
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
          <Stack.Group>
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen name="Account Setup" component={AccountSetupNav} /> */}
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Login or Register"
              component={LoginOrSignupScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShadowVisible: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegistrationScreen}
              options={{
                headerShadowVisible: false,
              }}
            />

            <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const theme = extendTheme({
  fontConfig: {
    Inter: {
      200: {
        normal: 'Inter-ExtraLight',
      },
      300: {
        normal: 'Inter-Light',
      },
      400: {
        normal: 'Inter-Regular',
      },
      500: {
        normal: 'Inter-Medium',
      },
      600: {
        normal: 'Inter-SemiBold',
      },
      700: {
        normal: 'Inter-Bold',
      },
      800: {
        normal: 'Inter-ExtraBold',
      },
    },
    WorkSans: {
      100: {
        normal: 'WorkSans-Thin',
      },
      200: {
        normal: 'WorkSans-ExtraLight',
      },
      300: {
        normal: 'WorkSans-Light',
      },
      400: {
        normal: 'WorkSans-Regular',
      },
      500: {
        normal: 'WorkSans-Medium',
      },
      600: {
        normal: 'WorkSans-SemiBold',
      },
      700: {
        normal: 'WorkSans-Bold',
      },
      800: {
        normal: 'WorkSans-ExtraBold',
      },
    },
  },
  fonts: {
    heading: 'WorkSans',
    body: 'Inter',
    mono: 'Inter',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MyNavigator />
    </NativeBaseProvider>
  );
}
