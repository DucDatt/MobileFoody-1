import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import  store  from './redux/stores/store';
import TagView from './navigation/TagView';
import CateManage from './views/Admin/CateManage';

export default function App() {
  return (
  //   <Provider store={store}>
  //     <NavigationContainer>
  //       <TagView />
  //     </NavigationContainer>
  //   </Provider>
  // );
  <Provider store={store}>
  <CateManage/>
  
 </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});