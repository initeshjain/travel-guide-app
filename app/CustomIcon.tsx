import Icon from 'react-native-vector-icons/EvilIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const CustomIcon: React.FC = () => {
  const navigation: StackNavigationProp<RootStackParamList, 'SearchView'> = useNavigation();

  return (
    <Icon name="search" size={30} color="white" style={{ marginRight: 10 }} onPress={() => navigation.navigate('SearchView')} />
  )
}

export default CustomIcon;