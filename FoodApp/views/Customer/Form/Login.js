import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation, }) => {


    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const auth = getAuth();

    const login=()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    navigation.navigate("HomeCategory")
    // ...
  })
  .catch((error) => {
    setValidPhone(false)
  });
    }
    



    const [number, onChangeNumber] = useState("");
    const [isValidPhone, setValidPhone] = useState(true);

    const verifyPhoneNumber = (phone) => {
        let regex = RegExp(/([\+84|84|0]+(3|5|7|9|1[2|4|6|8]))+([0-9]{8})\b/);
        if(!phone) return true;
        if(regex.test(phone)){
            return true;
        }
        return false;
    }

    return (
        <View style={styles.loginContainer}>
            <ImageBackground
                source={{ uri: 'https://img.freepik.com/premium-photo/asian-tea-concept-cup-tea-teapot-with-green-tea-dry-leaves-view-from-space-text-dark-stone-background_76790-624.jpg?w=996' }}
                resizeMode='cover'
                style={styles.bgContainer}

            >
                <View style={styles.logoLogin}>
                    <Ionicons name='person' color='#FFF' size={36} />
                </View>
                <Text style={styles.signinText}>
                    Sign In
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Số điện thoại' style={styles.inputText}
                            onChangeText={(text) => {
                                setEmail(text)
                            }}
                          
                        />
                    </View>
                    <Text style={styles.inputValidate}>{isValidPhone? '' : 'Email không tồn tại'}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mật khẩu' style={styles.inputText} secureTextEntry={true}   onChangeText={(text) => {
                                setPassword(text)
                            }}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => login()}>
                        <Text style={styles.btnTxt} >Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.txtForgot} >Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ marginLeft: 150, color: 'white', }} >Đăng ký!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    logoLogin: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#d81b60',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    signinText: {
        color: '#d81b60',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        color: '#FFF',

    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    inputContainer: {
        width: '70%',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputText: {
        borderBottomWidth: 3,
        borderBottomColor: '#d81b60',
        paddingVertical: 10,
       
        borderRadius: 10,
    },
    inputValidate:{
        color: 'red',
        paddingVertical: 5,

    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    btnTxt: {
        color: '#FFF'
    },
    bgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    txtForgot: {
        marginTop: 20,
        marginLeft: 100,
        color: 'white',
        fontStyle: 'Underline'
    }
});