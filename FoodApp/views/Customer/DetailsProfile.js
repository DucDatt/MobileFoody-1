import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsProfile = ({ navigation, }) => {
    return (
        <View style={styles.detailprofileContainer}>
            <View style={styles.view}>
                <Icon name='chevron-left' size={25} color={'white'} style={styles.icongoback} onPress={() => {navigation.goBack()}}/>
                <Text style={styles.ttcn}>Thông tin cá nhân</Text>
            </View>
            <View>
                <View style={styles.form}>
                    <Text style={styles.text}>Họ và tên</Text>
                    <View style={styles.hideInput}>
                        <TextInput placeholder='Nhập họ và tên' style={styles.textInside} />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Giới tính</Text>
                    <View style={styles.hideInput}>
                        <TextInput placeholder='Nhập giới tính' style={styles.textInside} />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Ngày sinh</Text>
                    <View style={styles.hideInput}>
                        <TextInput placeholder='Nhập ngày sinh' style={styles.textInside} />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Số điện thoại</Text>
                    <View style={styles.hideInput}>
                        <TextInput placeholder='Nhập số điện thoại' style={styles.textInside} />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.hideInput}>
                        <TextInput placeholder='Nhập Email' style={styles.textInside} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', width: '80%', }}>
                <TouchableOpacity style={styles.btnChange}>
                    <Text style={styles.textBtn}>Thay đổi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnExit}>
                    <Text style={styles.textBtn}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DetailsProfile;

const styles = StyleSheet.create({
    detailprofileContainer: {
        flex: 1,
    },
    view: {
        height: 70,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    icongoback: {
        paddingStart: 25,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ttcn: {
        alignSelf: 'center',
        justifyContent: 'center',
        lineHeight: 55,
        color: 'white',
        fontSize: 25,
        marginLeft: 50
    },
    form: {
        width: '100%',
        height: 'auto',
        paddingTop: 20,
        justifyContent: 'center',
        marginBottom: 10
    },
    text: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    hideInput: {
        width: '80%',
        height: '45%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 10,
    },
    textInside: {
        marginLeft: 20,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        fontSize: 14
    },
    btnChange: {
        width: '50%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5,
        backgroundColor: '#FF7867',
        marginRight: 10
    },
    btnExit: {
        width: '50%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#FF7867',
    },
    textBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
    },
});