import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import IconButton from './components/UI/IconButton';

// Context for managing user authentication
import AuthContextProvider, { AuthContext } from './store/auth-context';

// global color styles
import { Colors } from './constants/styles';

const Stack = createNativeStackNavigator();

// un-authenticated user
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}

// authenticated user
function AuthenticatedStack() {
  // consuming the Context
  const { logOut } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          // logout button
          headerRight: ({ tintColor }) => (
            <IconButton icon='exit' size={24} color={tintColor} onPress={logOut} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function Root() {
  // consuming the Context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
