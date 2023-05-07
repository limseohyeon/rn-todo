import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useUserContext } from '../ccontexts/UserContext';

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
