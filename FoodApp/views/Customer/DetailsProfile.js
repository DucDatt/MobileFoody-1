import React from 'react';
import { StyleSheet,Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsProfile = ({navigation,}) => {
    return(
        <View>
            <View style={{flexDirection:'row',paddingVertical:10}}>
                <Image  style={styles.imgProfile}  source={{uri:'https://media.vov.vn/sites/default/files/styles/large/public/2021-11/dbruyne.jpeg'}}/>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={styles.profilename}>Kevin</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.detailProfile}>
            <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Họ và tên</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Nhập họ và tên' style={styles.inputText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Giới tính</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                    <TextInput placeholder='Chọn giới tính' style={styles.inputText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Năm sinh</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Nhập ngày tháng năm sinh' style={styles.inputText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Số điện thoại</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Nhập số điện thoại của bạn' style={styles.inputText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Email</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Nhập địa chỉ email của bạn' style={styles.inputText}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.change}>
                <TouchableOpacity style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Icon name='spinner' size={20} color={'red'} style={{marginStart:14}}/>
                    <Text style={styles.changeprofile}>Thay đổi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DetailsProfile;

const styles = StyleSheet.create({
    imgProfile:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginStart: 10,
        marginTop: 10
    },
    profilename: {
        color: 'black',
        fontSize : 25,
        paddingStart: 10,
        paddingTop: 3,
        fontWeight:'bold',
    },
    profile: {
        color: 'black',
        fontSize : 25,
        paddingStart: 10,
        paddingTop: 3,
    },
    detailProfile: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    editSex: {
        flexDirection: 'column',
        paddingVertical: 10,
        paddingTop: 10,
    },
    chooseSex: {
        width: '80%',
        backgroundColor: 'gray'
    },
    inputText: {
        paddingVertical: 5,
        marginBottom: 10,
        height: 40,
        alignItems: 'center',
    },
    change: {
        backgroundColor: 'white',
        height: 45,
        marginTop: 10
    },
    changeprofile: {
        color: 'red',
        fontSize: 25,
        paddingStart: 10
    }
});