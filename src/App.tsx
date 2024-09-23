import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from './presentation/ApplicationContext';
import { NavigationContainer } from '@react-navigation/native';
import { RealmProvider } from '@realm/react';
import { schemas } from './data/data_source/schema';
import HomeScreen from './presentation/home_screen/HomeScreen';
import BeneficiaryScreen from './presentation/beneficiary_screen/BeneficiaryScreen';
import TransactionScreen from './presentation/transaction_screen/TransactionScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <RealmProvider schema={schemas} schemaVersion={3}>
          <ApplicationProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Beneficiary" component={BeneficiaryScreen} />
              <Stack.Screen name="Transaction" component={TransactionScreen} />
            </Stack.Navigator>
          </ApplicationProvider>
        </RealmProvider>
      </NavigationContainer>
  );
};

export default App;
