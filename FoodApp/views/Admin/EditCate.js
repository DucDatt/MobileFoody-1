import { Platform, ImageBackground, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import React,{ useState } from 'react';
import { firebase } from "../../Config/firebase";
import * as ImagePicker from 'expo-image-picker'
import Ionicons from "react-native-vector-icons/Ionicons"
import { deleteF,update } from '../../redux/actions/categoryAction';

const EditCate = ({
    navigation,route
}) => {
    const dispatch = useDispatch();
    const db = useSelector((store) => store.products);


    const { cateId } = route.params;
    const { cateImg } = route.params;
    const { cateName } = route.params;
    
    const { cateDocId } = route.params;



    const [docId, setdocId] = useState(cateDocId);

   
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const handleUpdate = (docId) => {
        let newFood = {
            TenDM: name,
            MaDM: id,
            HinhDM: selectedImage.localURI,
        }

        dispatch(update(docId, newFood));
        navigation.navigate('ViewAll');
    }
    const del = (docId) => {

        dispatch(deleteF(docId));
        navigation.navigate('ViewAll')
    }

    const [selectedImage, setSelectedImage] = useState({ localURI: cateImg })
    const openImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({ base64: true });
        if (result.cancelled)
            return;
        // console.log(result)
        let uri = result.uri;
        // setSelectedImage({ localURI: result.uri });
        if (Platform.OS === 'web') {
            let base64code = result.base64;
            //upload
            await uploadBase64(base64code);
        } else {
            let uri = result.uri;
            //step1 -> convert uri --> blob
            const blobFile = await convertURI2BlobFile(uri)
            //step2 --> upload to cloud
            await uploadFile(blobFile);
        }
    }
    const convertURI2BlobFile = async (uri) => {
        const result = await new Promise((resolve, reject) => {
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.onload = function () {
                resolve(xmlRequest.response);
            }
            xmlRequest.onerror = function () {
                reject(new TypeError("Request failed"));
            }
            xmlRequest.responseType = 'blob';
            xmlRequest.open("GET", uri, true);
            xmlRequest.send(null);
        })
        return result;
    }
    const uploadFile = async (blobFile) => {
        let imgname = 'img-android' + new Date().getTime();
        //step2
        let storage = getStorage();
        let storageRef = ref(storage, `ImageCategory/${imgname}.jpg`);
        let metadata = { contentType: 'image/jpeg' }

        const uploadTask = uploadBytesResumable(storageRef, blobFile, metadata);
        uploadTask.on("state_changed",
            (snapshot) => { },
            (error) => { },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('downloadURL', downloadURL)
                    setSelectedImage({ localURI: downloadURL })
                })
            }
        )
    }
    const uploadBase64 = async (base64code) => {
        let imgname = 'img-w-' + new Date().getTime();
        //step2
        let storage = getStorage();
        let storageRef = ref(storage, `ImageCategory/${imgname}.jpg`);
        let metadata = { contentType: 'image/jpeg' }
        uploadString(storageRef, base64code, 'base64', metadata).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('downloadURL', downloadURL)
                setSelectedImage({ localURI: downloadURL });
            })
        })
    }


    return (

        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://t4.ftcdn.net/jpg/03/78/97/59/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg' }}
                resizeMode='cover'

                style={styles.bgContainer}
            >

                <Image source={{ uri: selectedImage.localURI }}
                    style={styles.img} />
                <TouchableOpacity onPress={openImage}>
                    <Text>Choose Image</Text>
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <TextInput placeholder={cateName} style={styles.inputText} onChangeText={(val) => setName(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder={cateId} style={styles.inputText} onChangeText={(val) => setId(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Hình ảnh' style={styles.inputText} value={selectedImage.localURI}/>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => handleUpdate(docId)}>
                    <Text style={styles.btnTxt} >Sửa món ăn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => del(docId)}>
                    <Text style={styles.btnTxt} >Xóa món ăn</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default EditCate;
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,

    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 75
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
        fontSize: 14,
        color: 'white'
    },
    inputContainer: {
        width: '70%',
        marginBottom: 10,
    },
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#d81b60',
        paddingVertical: 10,
        flexWrap: 'wrap',
        paddingLeft: 15,
        color: 'black',
    },
    bgContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
});