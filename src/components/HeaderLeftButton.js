import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ProppTypes from 'prop-types';

const HeaderLeftButton = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();
  if (!canGoBack) {
    return null;
  }
  return (
    <Pressable onPress={navigation.goBack} hitSlop={10}>
      <Entypo name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

HeaderLeftButton.protoTypes = {
  canGoBack: ProppTypes.bool,
  tintColor: ProppTypes.string,
};

export default HeaderLeftButton;
