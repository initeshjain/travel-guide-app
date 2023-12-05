import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

type Props = {
  places: Spot[];
};

const ListView: React.FC<Props> = ({ places }) => {
  return (
    <View style={styles.container}>
      <FlatList data={places} renderItem={({ item }) => <Card item={item} />} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ListView;
