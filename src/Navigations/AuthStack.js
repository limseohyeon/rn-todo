import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import { PRIMARY, WHITE } from '../color';
import { Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name={'List'}
        component={ListScreen}
        options={{ headerRight: HeaderRightButton }}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'Settings'} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
