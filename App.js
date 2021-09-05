import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
 
// React navigation stack
import RootStack from './navigators/RootStack';
import BottomTab from './navigators/BottomTab';



export default function App() {
  return (
    <NativeBaseProvider>
      <RootStack />
      {/* <BottomTab /> */}
    </NativeBaseProvider>
    
  );
}


