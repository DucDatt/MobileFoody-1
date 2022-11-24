import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAdmin from './HomeAdmin';
import AddCate from './AddCate';
import EditCate from './EditCate';
const Stack=createNativeStackNavigator();
const CateManage = ({
    params,
}) =>  {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}}name='ViewAll'  component={HomeAdmin}/>
                <Stack.Screen name='AddCate' component={AddCate}/>
                <Stack.Screen name='EditCate' component={EditCate}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default CateManage;
const styles = StyleSheet.create({
    
});