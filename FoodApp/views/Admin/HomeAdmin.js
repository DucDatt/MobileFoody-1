import React from 'react';
import {StyleSheet ,Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeAdmin = ({navigation,}) =>{
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }

      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    
      if (initializing) return null;
    
      if (!user) {
        return (
            <View>
            <Text>Welcome {user.email}</Text>
          </View>
        );
      }
    
    
    return(
    <View>
        <Text>HomeAdmin</Text>
    </View>
);
}
export default HomeAdmin;

const styles = StyleSheet.create({
    
});