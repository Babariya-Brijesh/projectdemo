import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../pages/Explore';
import WatchList from '../pages/WatchList';
import Trips from '../pages/Trips';
import Inbox from '../pages/Inbox';
import Profile from '../pages/Profile';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Search from '../pages/Search';
import SingleRoom from '../pages/SingleRoom';
import {useEffect} from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExploreStake = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    if (routeName === 'SingleRoom') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Explore} />

      <Stack.Screen
        options={{presentation: 'fullScreenModal'}}
        name="SingleRoom"
        component={SingleRoom}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{presentation: 'fullScreenModal'}}
      />
    </Stack.Navigator>
  );
};

const ProfileStake = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen
        options={{
          headerTitle: 'Log in or sign up',
          headerShown: true,
          presentation: 'modal',
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'mon-sb',
          },
        }}
        tabBarOptions={{
          activeTintColor: '#dc143c',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <Feather name="search" size={27} color="#dc143c" />
              ) : (
                <Feather name="search" size={27} color="#808080" />
              ),
          }}
          name="Explore"
          component={ExploreStake}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <AntDesign name="hearto" size={27} color="#dc143c" />
              ) : (
                <AntDesign name="hearto" size={27} color="#808080" />
              ),
          }}
          name="WatchList"
          component={WatchList}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <FontAwesome5 name="airbnb" size={27} color="#dc143c" />
              ) : (
                <FontAwesome5 name="airbnb" size={27} color="#808080" />
              ),
          }}
          name="Trips"
          component={Trips}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <MaterialCommunityIcons
                  name="message-outline"
                  size={27}
                  color="#dc143c"
                />
              ) : (
                <MaterialCommunityIcons
                  name="message-outline"
                  size={27}
                  color="#808080"
                />
              ),
          }}
          name="Inbox"
          component={Inbox}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={27}
                  color="#dc143c"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={27}
                  color="#808080"
                />
              ),
          }}
          name="Profile"
          component={ProfileStake}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
