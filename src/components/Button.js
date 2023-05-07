import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { DANGER, GRAY, PRIMARY, WHITE } from '../color';

//PRIMARY에 color에 존재하는 PRIMARY 대표어로 할당
export const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  DANGER: 'DANGER',
};

const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
  const colors = { PRIMARY, DANGER }; //colors에는 PRIMARY 와 DANGER가 key로 존재함 결과 아래와 같이 동작
  // colors={
  //   PRIMARY : { LIGHT:'', DEFAULT:'', DART:''}
  //   DANGER : {...}
  // } PRIMARY 와 DANGER의 값을 갖게 됨
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT },
      ]}
      disabled={disabled}
    >
      {/* 로딩이 true 인 동안 로딩아이콘 띄움 */}
      {isLoading ? (
        <ActivityIndicator size={'small'} color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};
//기본값을 PRIMARY설정
Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    lineHeight: 20,
  },
});

export default Button;
