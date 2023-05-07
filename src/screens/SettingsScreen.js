import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Button, { ButtonTypes } from '../components/Button';
import { useUserContext } from '../ccontexts/UserContext';
import { DANGER } from '../color';

const SettingScreen = () => {
  const { setUser } = useUserContext();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={'SIGNOUT'}
          onPress={() => setUser(null)}
          buttonType={ButtonTypes.DANGER}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: { width: '100%', paddingHorizontal: 20 },
});

export default SettingScreen;
