import React from "react";
import { View, StyleSheet, Text, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any, 'ListView'>;
};

const ListView: React.FC<Props> = ({ navigation }) => {

  const touristSpots: Place[] = [
    {
      id: 1,
      title: "TCS Powai",
      description: `Embrace the cliche and opt for a horse and carriage ride departing from the Gateway at dusk - it's a lovely time to tour the city.
      
      Created to mark the illustrious visit of King George V and Queen Mary in 1911, the Gateway of India was not completed until 1948, two years before India's independence from England. Instead, the British royals landed on Indian soil to find a cardboard cutout fashioned to show the intended finished product.

      Though it was constructed to welcome the royal couple, the Indo-Saracenic structure has since become known as the place where the British bid their final adieu to the Subcontinent following the end of the Raj.
      
      These days, the 26 metre arch facing Mumbai's harbor acts as a meeting place for locals and travellers alike. Boats for Elephanta Island depart from under the arch, while sweet vendors and family photographers ply the square 24/7.
      
      Created to mark the illustrious visit of King George V and Queen Mary in 1911, the Gateway of India was not completed until 1948, two years before India's independence from England. Instead, the British royals landed on Indian soil to find a cardboard cutout fashioned to show the intended finished product.

      Though it was constructed to welcome the royal couple, the Indo-Saracenic structure has since become known as the place where the British bid their final adieu to the Subcontinent following the end of the Raj.`,
      images: [
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
      ],
    },
    {
      id: 2,
      title: "Gateway of India",
      description: `Embrace the cliche and opt for a horse and carriage ride departing from the Gateway at dusk - it's a lovely time to tour the city.
      
      Created to mark the illustrious visit of King George V and Queen Mary in 1911, the Gateway of India was not completed until 1948, two years before India's independence from England. Instead, the British royals landed on Indian soil to find a cardboard cutout fashioned to show the intended finished product.

      Though it was constructed to welcome the royal couple, the Indo-Saracenic structure has since become known as the place where the British bid their final adieu to the Subcontinent following the end of the Raj.
      
      These days, the 26 metre arch facing Mumbai's harbor acts as a meeting place for locals and travellers alike. Boats for Elephanta Island depart from under the arch, while sweet vendors and family photographers ply the square 24/7.`,
      images: [
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388",
      ],
    },
  ];

  const Card = ({ item }: { item: Place }) => (
    <TouchableOpacity key={item.id} style={styles.card}
      onPress={() => navigation.navigate('PlaceView', { place: item })}
    >
      <Image source={{ uri: item.images[0] || "" }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{`${item.description.slice(0, 120)}...`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={touristSpots} renderItem={Card} />
    </View >
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth - 20,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "black",
  },
  description: {
    fontSize: 12,
    color: "gray",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: .5,
    marginHorizontal: 10,
    paddingBottom: 10,
  }
});

export default ListView;
