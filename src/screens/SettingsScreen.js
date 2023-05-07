import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

const SettingScreen = () => {
  <View style={styles.container}>
    <Text style={{ fontSize: 30 }}>SettingsScreen</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
