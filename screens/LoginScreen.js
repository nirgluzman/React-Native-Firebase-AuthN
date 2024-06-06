import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay'; // custom spinner component

// Context for managing user authentication
import { AuthContext } from '../store/auth-context';

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // consuming the Context
  const { logIn } = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true); // enable spinner
    try {
      await logIn(email, password);
    } catch (err) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    }
    setIsAuthenticating(false); // disable spinner
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in ...' />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}
