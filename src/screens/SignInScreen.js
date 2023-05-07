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
import Input, {
  ReturnKeyTypes,
  iconNames,
  keyboardTypes,
} from '../components/input';
import SafeInputView from '../components/SafeInputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import { Alert } from 'react-native';
import propTypes from 'prop-types';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        await signIn(email, password);
        setIsLoading(false);
        navigation.navigate('List');
      } catch (e) {
        Alert.alert('SignIn Failed', e, [
          {
            text: 'OK',
            onPress: () => setIsLoading(false),
          },
        ]);
      }
    }
  };
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />

        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={iconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'password'}
          secureTextEnrty
          iconName={iconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={'로그인'}
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

SignInScreen.propTypes = {
  navigation: propTypes.object,
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default SignInScreen;
