import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type Props = {
  route: RouteProp<RootStackParamList, 'PlaceView'>;
};

const PlaceView: React.FC<Props> = ({ route }) => {
  const { place } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <ScrollView horizontal pagingEnabled>
          {place && place.images && place.images.map((image: string, index: number) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: windowWidth,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: "black",
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: "black",
  },
});

export default PlaceView;
