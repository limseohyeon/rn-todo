import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ProppTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10}>
      <Entypo name="cog" size={24} color={tintColor} />
    </Pressable>
  );
};

HeaderRightButton.ProppTypes = {
  tintColor: ProppTypes.string,
};

export default HeaderRightButton;
