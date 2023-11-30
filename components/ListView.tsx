import React from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type Props = {
  places: Spot[];
};

const ListView: React.FC<Props> = ({ places }) => {
  const navigation: StackNavigationProp<RootStackParamList, 'ListView'> = useNavigation();
  const Card = ({ item }: { item: Spot }) => {

    return (
      <TouchableOpacity key={item.id} style={styles.card}
        onPress={() => navigation.navigate('PlaceView', { place: item })}
      >
        <Image source={item.images[0] || ""} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{`${item.description.trim().slice(0, 100)}...`}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList data={places} renderItem={Card} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 0.5,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: "black",
  },
  description: {
    flex: 1,
    fontSize: 12,
    color: "gray",
  },
});

export default ListView;
