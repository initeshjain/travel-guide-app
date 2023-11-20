import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';
import db from '../db';

type AddPlaceProps = {
  navigation: StackNavigationProp<any, 'AddPlace'>;
};

const AddPlace: React.FC<AddPlaceProps> = ({ navigation }) => {
  const [placeName, setPlaceName] = useState<string>('');
  const [placeDescription, setPlaceDescription] = useState<string>('');
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  // Function to handle image selection
  const handleSelectImage = async () => {
    try {
      const images = await ImagePicker.openPicker({
        multiple: true,
        waitAnimationEnd: false,
      });

      const newImagePaths = images.map((image) => image.path);
      setImagePaths(newImagePaths);
    } catch (error) {
      console.error('ImagePicker Error:', error);
    }
  };

  const handleAddPlace = async () => {

    await db.insertPlace({
      name: placeName,
      description: placeDescription,
      imagePaths: imagePaths,
    })

    // navigation.goBack();
    navigation.navigate("GuideList");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputview}>
        <TextInput
          placeholder="Place Name"
          placeholderTextColor="gray"
          value={placeName}
          onChangeText={text => setPlaceName(text)}
          style={{ color: "black" }}
        />
        <TextInput
          placeholder="Place Description"
          placeholderTextColor="gray"
          value={placeDescription}
          onChangeText={text => setPlaceDescription(text)}
          style={{ color: "black" }}
        />
        {/* Display selected images */}
        {imagePaths.map((path, index) => (
          <Image key={index} source={{ uri: path }} style={{ width: 100, height: 100 }} />
        ))}

        {/* Button to trigger image selection */}
        <Button title="Select Images" onPress={handleSelectImage} />
      </View>

      <Button title="Add Place" onPress={handleAddPlace} />
    </ScrollView>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  inputview: {
    marginBottom: 10,
  },
})
