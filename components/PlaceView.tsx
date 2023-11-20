import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type PlaceViewProps = {
  route: RouteProp<RootStackParamList, 'PlaceView'>;
};

const PlaceView: React.FC<PlaceViewProps> = ({ route }) => {
  const { place } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>

      {/* Display images */}
      {place.imagePaths.map((path, index) => (
        <Image key={index} source={{ uri: path }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "black",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: "black",
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
});

export default PlaceView;
