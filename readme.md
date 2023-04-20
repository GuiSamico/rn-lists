## Libraries

### To run as a web app
- npm install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
- Then, run `npm run web` to start the web app.

### Navigations
- npm install @react-navigation/native @react-navigation/native-stack
- Import the following in App.js
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
```
- Create a Stack Navigator
```javascript
const Stack = createStackNavigator();
```
- Create a screen 
- Import the screen in App.js
```javascript
import HomeScreen from './screens/HomeScreen';
```
- Then, wrap the app with the NavigationContainer
```javascript
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### List
