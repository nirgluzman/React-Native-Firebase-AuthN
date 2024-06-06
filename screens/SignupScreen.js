import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay'; // custom spinner component

// Context for managing user authentication
import { AuthContext } from '../store/auth-context';

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // consuming the Context
  const { signUp } = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true); // enable spinner
    try {
      await signUp(email, password);
    } catch (err) {
      console.log(err);
      Alert.alert(
        'Authentication failed!',
        'Could not create user. Please check your input and try again.'
      );
    }
    setIsAuthenticating(false); // disable spinner
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user ...' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}
