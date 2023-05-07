import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigations';
import { UserProvider } from './ccontexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
