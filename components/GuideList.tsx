import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import db from '../db';

type GuideListProps = {
  navigation: StackNavigationProp<any, 'GuideList'>;
};

const GuideList: React.FC<GuideListProps> = ({ navigation }) => {
  const [places, setPlaces] = React.useState<Place[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Guide List Called');

      async function getdata() {
        try {
          let data = await db.getPlaces();
          setPlaces(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      getdata();
    }, [])
  );

  const RenderItem = ({ item }: { item: Place }) => (
    <View style={styles.place} key={item.id}>
      <Text style={{ color: "black" }}>{item.name}</Text>
      <Text style={{ color: "black" }}>{item.description}</Text>
      <Button
        title="View Place"
        onPress={() => navigation.navigate('PlaceView', { place: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={places} renderItem={RenderItem} />

      <Button
        title="Add Place"
        onPress={() => navigation.navigate('AddPlace')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  place: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
})

export default GuideList;
