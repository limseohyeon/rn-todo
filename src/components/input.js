import { TextInput, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../color';
import { forwardRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};
export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};
export const iconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

const Input = forwardRef(
  ({ title, placeholder, value, onChangeText, iconName, ...props }, ref) => {
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

        <View>
          <View style={styles.icon}>
            <MaterialIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
          <TextInput
            ref={ref}
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
      </View>
    );
  }
);

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
  iconName: PropTypes.oneOf(Object.values(iconNames)),
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
    paddingLeft: 30,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
