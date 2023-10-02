import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from '@theme/index';
import Groups from '@screens/Groups';
import Loading from '@components/Loading';

const App = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      { fontsLoaded ? 
        <SafeAreaView>
          <Groups />
        </SafeAreaView> :
          <Loading />
       }
    </ThemeProvider>    
    );
}

export default App;