import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { resolverReload } from './redux/actions/reloadAction';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  store.dispatch(resolverReload())
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
