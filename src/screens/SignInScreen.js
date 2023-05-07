import { StyleSheet, View, Image, Keyboard } from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserContext } from '../ccontexts/UserContext';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserContext(); //setuset 이곳에 존재하기 때문에 onsubmit을 통해 setUser을 별도로 전달할 필요 없음

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(email, password);
        setUser(data);
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
      <SafeAreaView style={styles.container}>
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
          // =onsubmmit으로 setUser값 전달하기 위한 함수 호출
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
      </SafeAreaView>
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default SignInScreen;
