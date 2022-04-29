import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/utils/navigation/RootNavigator'

import { AuthUserProvider } from './src/utils/context/AuthUserProvider';




export default function App() {
  


  return (

    <AuthUserProvider>
    
      <NavigationContainer>

        <RootNavigation />

      </NavigationContainer>

    </AuthUserProvider>

  );

}
