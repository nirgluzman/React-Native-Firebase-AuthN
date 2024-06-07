# React Native - Expo + Firebase AuthN

Sample application to show authentication with email and password using Firebase Auth (backend
service).<br>

https://firebase.google.com/docs/auth

### GitHub repo

- https://github.com/nirgluzman/React-Native-Firebase-AuthN.git

## Resources

### Expo & Firebase

Accordind to Expo documentation, there are two options:<br>
https://docs.expo.dev/guides/using-firebase/

- Firebase JS SDK
- React Native Firebase

- The great advantage with Firebase JS SDK is that it supports Expo Go.

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

### Firebase Authentication

- https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/

### Google Signin

- Sign in with Google Branding Guidelines,
  https://developers.google.com/identity/branding-guidelines

- https://reactnativeelements.com/docs/components/socialicon (React Native UI Elements)

- https://stackoverflow.com/questions/75924863/expo-go-react-native-application-that-uses-google-authentication-in-firebase?rq=2

- https://medium.com/@prasadkatkade008/how-to-set-up-expo-dev-client-a-complete-guide-2024-be898a519ec1

- https://javascript.plainenglish.io/how-to-add-google-sign-in-expo-react-native-guide-2024-f9737d1f2a46

- https://react-native-google-signin.github.io/docs/buttons/native

- React Native does not export the `signInWIthPopup` and `signInWithRedirect` APIs since both of
  these functions directly modify the DOM.<br>
  https://stackoverflow.com/questions/70221477/some-functions-appear-as-undefined-firebase-auth-v9

- https://stackoverflow.com/questions/78591121/what-is-the-recommended-way-to-support-google-sign-in-on-react-native-applicatio

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

### React Navigation

https://reactnavigation.org/docs/getting-started

- Mandatory installations:

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

- Native Stack Navigator:

```bash
npm install @react-navigation/native-stack
```

- Bottom Tabs Navigator:

```bash
npm install @react-navigation/bottom-tabs
```

### Async Storage - data storage system for React Native applications

- https://firebase.google.com/support/release-notes/js#version_1030_-_august_22_2023
- https://react-native-async-storage.github.io/async-storage/docs/install
- https://docs.expo.dev/versions/latest/sdk/async-storage/

- When initializing Firebase Auth for React Native we need to provide AsyncStorage, otherwise, Auth
  state will default to memory persistence and will not persist between sessions.

### Expo SplashScreen

https://docs.expo.dev/versions/latest/sdk/splash-screen/

- Library to tell the splash screen to remain visible until it has been explicitly told to hide.

- This is useful to do tasks that will happen behind the scenes such as making API calls,
  pre-loading fonts, animating the splash screen and so on.
