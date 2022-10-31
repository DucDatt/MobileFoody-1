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
                        <Text style={styles.profile}>Giới tính</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Chọn giới tính' />
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Năm sinh</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Chọn ngày tháng năm sinh' />
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Số điện thoại</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Nhập số điện thoại của bạn' />
                    </TouchableOpacity>
                </View>
                <View style={styles.editSex}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={styles.profile}>Email</Text>
                        <Icon name='pen' size={14} color={'gray'} style={{paddingStart: 10,paddingTop:14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseSex}>
                        <TextInput placeholder='Chọn địa chỉ email của bạn' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                    <Icon name='sign-out-alt' size={20} color={'red'} style={{marginStart:10}}/>
                    <Text style={styles.signout}>Đăng xuất</Text>
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
    },
    chooseSex: {
        paddingVertical:5,
        paddingStart: 10,
        fontSize: 17,
    },
    logout: {
        backgroundColor: 'white',
        height: 45,
        marginTop: 10
    },
    signout: {
        color: 'red',
        fontSize: 25,
        paddingStart: 10
    }
});