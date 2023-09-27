// In App.js in a new project

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStatusBar from '@components/AppStatusBar';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from 'routes/StackNavigator';
import { colorTokens } from 'theme/Colors';


const Stack = createNativeStackNavigator();


function App() {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  const backgroundStyle = {
    backgroundColor: colorTokens.white,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AppStatusBar barStyle="dark-content" backgroundColor={colorTokens.white} />
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}



export default App;