import { View, StyleSheet, Text } from 'react-native';
import { GRAY, PRIMARY } from '../color';
import PropTypes from 'prop-types';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5} // prec : 10, curr : 1 , next : 10
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
    />
  );
};

List.PropTypes = {
  data: PropTypes.array.isRequired,
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
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
