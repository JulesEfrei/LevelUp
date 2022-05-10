import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/utils/navigation/RootNavigator'

import { AuthUserProvider } from './src/utils/context/AuthUserProvider';




export default function App() {
  


  return (

    // Context Provider for authentification
    <AuthUserProvider>
    
      <NavigationContainer>

        <RootNavigation />

      </NavigationContainer>

    </AuthUserProvider>

  );

}
