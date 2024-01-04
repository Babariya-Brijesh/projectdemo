import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Data, DataQustions} from '../data/dummay';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const showDetails = DataQustions => {
    navigation.navigate('Cart', {DataQustions});
  };

  // React.useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (routeName === 'Cart') {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [navigation, route]);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchTitle}
        onPress={() => showDetails(DataQustions)}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <SectionList
        contentContainerStyle={styles.list}
        sections={Data}
        renderSectionHeader={({section}) => {
          return (
            <View style={styles.ViewDiv}>
              <Text style={styles.header}>{section.title}</Text>
              <FlatList
                data={section.data}
                horizontal
                renderItem={({item}) => <RenderItem item={item} />}
              />
            </View>
          );
        }}
        renderItem={({item, section}) => {
          return null;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    gap: 5,
  },
  ViewDiv: {
    gap: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  header: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  touchTitle: {
    backgroundColor: '#6a5acd',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    color: '#ffff',
    padding: 10,
  },
});
