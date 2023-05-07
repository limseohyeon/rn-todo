import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../color';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
