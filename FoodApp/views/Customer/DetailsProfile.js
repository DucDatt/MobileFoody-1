import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsProfile = ({ navigation, }) => {
    return (
        <View style={styles.detailprofileContainer}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name='chevron-left' size={25} color='#fff' style={{alignSelf:'center'}}/>
                </TouchableOpacity>
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
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnChange}>
                        <Text style={styles.textBtn}>Thay đổi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnExit}>
                        <Text style={styles.textBtn}>Hủy</Text>
                    </TouchableOpacity>
                </View>
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
        height: 100,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#607d8b',
        opacity: 0.8
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
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 55,
    },
    hideInput: {
        width: '80%',
        height: '50%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 5,
    },
    btn: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%'
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