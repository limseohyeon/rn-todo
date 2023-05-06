import { TextInput, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};
export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({
  title,
  placeholder,
  //keyboardType,
  //returnKeyType,
  //secureTextEnrty,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType={'none'}
        keyboardAppearance="light"
        //keyboardType={keyboardType}
        //returnKeyType={returnKeyType}
        //secureTextEntry={secureTextEnrty}
      />
    </View>
  );
};

Input.defaultProps = {
  returnKeyType: ReturnKeyTypes.DONE,
};
Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(keyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEnrty: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: 20, marginVertical: 10 },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 42,
  },
});

export default Input;
