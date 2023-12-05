import React from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import Card from "./Card";
import { useState, useEffect } from "react";
import { route1Places, route2Places } from "../places"

const SearchView: React.FC = () => {
  const [places, setPlaces] = useState<Spot[]>([]);
  const [searchText, setSearchText] = useState("");

  const allPlaces: Spot[] = [...route1Places, ...route2Places]

  useEffect(() => {
    const filtered = allPlaces.filter(place => place.title.toLowerCase().includes(searchText.toLowerCase()));
    setPlaces(filtered)
  }, [searchText])


  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="taj ..." value={searchText}
        onChangeText={text => setSearchText(text)} autoFocus />
      <FlatList data={places} renderItem={({ item }) => <Card item={item} />} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    color: "black",
  }
});

export default SearchView;
