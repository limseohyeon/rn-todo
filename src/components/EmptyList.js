import { Image } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { PRIMARY } from '../color';

const EmptyList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/main.png')}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>할 일을 추가하세요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: PRIMARY.DARK,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default EmptyList;
