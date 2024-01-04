import {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Profile from '../pages/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllSearch from '../pages/AllSearch';
import SearchDetails from '../pages/SearchDetails';
import Cart from '../pages/Cart';

const Stack = createNativeStackNavigator();

const StackTab = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    if (routeName === 'SearchDetails') {
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
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6a5acd',
        },
      }}>
      <Stack.Screen name="Search" component={AllSearch} />
      <Stack.Screen
        options={{
          headerTitle: '',
          presentation: 'modal',
          headerShown: false,
        }}
        name="SearchDetails"
        component={SearchDetails}
      />
    </Stack.Navigator>
  );
};
const StackTabHome = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    if (routeName === 'Cart') {
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
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6a5acd',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="My Sets" component={Home} options={{}} />
      <Stack.Screen
        options={{
          headerTitle: 'Learn',
        }}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};
const StackTabProfile = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6a5acd',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: '#6a5acd',
        }}>
        <Tab.Screen
          name="Home"
          component={StackTabHome}
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <Ionicons name="home-outline" size={30} color="#6a5acd" />
              ) : (
                <Ionicons name="home-outline" size={30} color="#a9a9a9" />
              ),
          }}
        />
        <Tab.Screen
          name="SearchAll"
          component={StackTab}
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <AntDesign name="search1" size={30} color="#6a5acd" />
              ) : (
                <AntDesign name="search1" size={30} color="#a9a9a9" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={StackTabProfile}
          options={{
            tabBarIcon: ({color, size, focused}) =>
              focused ? (
                <AntDesign name="user" size={30} color="#6a5acd" />
              ) : (
                <AntDesign name="user" size={30} color="#a9a9a9" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ButtomTab;
