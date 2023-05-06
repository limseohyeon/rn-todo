import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  Platform,
} from 'react-native';
import Input, { ReturnKeyTypes, keyboardTypes } from '../components/input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />

        <Input
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
        />
        <Input title={'password'} secureTextEnrty={true} />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    width: 200,
    height: 200,
  },
  avoid: { flex: 1 },
});
export default SignInScreen;
