import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { BLACK, DANGER, PRIMARY } from '../color';
import { Ionicons } from '@expo/vector-icons';

const ListItem = memo(({ item }) => {
  const checkboxProps = {
    name: item.isDone ? 'checkbox-sharp' : 'ios-checkbox-outline',
    color: item.isDone ? PRIMARY.DEFAULT : BLACK,
    size: 20,
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}} hitSlop={10}>
        <Ionicons {...checkboxProps} />
      </Pressable>

      <View style={styles.task}>
        <Text>{item.task}</Text>
      </View>

      <Pressable onPress={() => {}} hitSlop={10}>
        <FontAwesome5 name="trash" size={20} color={DANGER.DEFAULT} />
      </Pressable>
    </View>
  );
});

ListItem.displayName = 'ListItem';
ListItem.propTypes = { item: PropTypes.object.isRequired };
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  task: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ListItem;
