import { TextInput, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../color';
import { useState } from 'react';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};
export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, value, onChangeText, ...props }) => {
  const [isFocused, setInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title, //default
          value && styles.hasValuetitle, // value
          isFocused && styles.focusedTitle, // value + focus
        ]}
      >
        {title}
      </Text>

      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          value && styles.hasValueInput,
          isFocused && styles.focusedInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType={'none'}
        keyboardAppearance="light"
        onBlur={() => setInputFocused(false)}
        onFocus={() => setInputFocused(true)}
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
  value: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(keyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEnrty: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: 20, marginVertical: 10 },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: 600,
    color: PRIMARY.DEFAULT,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValuetitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    height: 42,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
});

export default Input;
