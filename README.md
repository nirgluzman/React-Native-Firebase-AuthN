# React Native - Expo + Firebase + Google Signin

### GitHub repo

- https://github.com/nirgluzman/React-Native-Firebase-Google-AuthN.git

## Resources

### Expo & Firebase

- https://docs.expo.dev/guides/using-firebase/

### Firebase JS SDK

- https://docs.expo.dev/guides/using-firebase/#using-firebase-js-sdk

### React Native Firebase

- https://docs.expo.dev/guides/google-authentication/ (integrate Google authentication in Expo
  project)
- NOTE: `@react-native-google-signin/google-signin` library can NOT be used in the Expo Go app !!

- https://rnfirebase.io/ (React Native Firebase)
- https://react-native-google-signin.github.io/docs/install
- https://react-native-google-signin.github.io/docs/setting-up/expo (Expo setup for Google Sign In)

- https://www.youtube.com/watch?v=mZlKwRV4MC8 (Create an Expo App with React-Native Firebase)

### Firebase API Key - Security aspects

https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31435374?start=15#questions/5576238

- Once our application is deployed, we can restrict that key to only be used from your deployment
  url (in the case of a web frontend - api key restricted to the origin of the deployed
  application).

### Start a new React Native project with Expo

- https://reactnative.dev/docs/environment-setup
- https://docs.expo.dev/

```bash
npx create-expo-app <project name> --template blank
```

### Environment variables in Expo projects

https://docs.expo.dev/guides/environment-variables/

- The Expo CLI will automatically load environment variables with an `EXPO_PUBLIC_` prefix from .env
  files for use within your JavaScript code.

- Do not store sensitive info, such as private keys, in `EXPO_PUBLIC_` variables. These variables
  will be visible in plain-text in your compiled application.
