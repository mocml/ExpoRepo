import { useNavigation } from '@react-navigation/native';

export function useHome() {
  const navigation = useNavigation<any>();

  const goToDetail = () => {
    navigation.navigate('DetailScreen');
  };

  return {
    goToDetail,
  };
}
