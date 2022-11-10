import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Payment = ({
    params,
}) => (
    <View style={styles.paymentContainer}>
        <View style={styles.item}>
            <Text style={styles.text}>Họ và tên</Text>
            <View style={styles.hideInput}>
                <Text style={styles.textInside}>Dat</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.text}>Số điện thoại</Text>
            <View style={styles.hideInput}>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.text}>Địa chỉ</Text>
            <View style={styles.hideInput}>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.text}>Tổng cộng</Text>
            <View style={styles.hideInput}>
            </View>
        </View>

        <TouchableOpacity style={styles.btn1}>
                <Text style={styles.textBtn}>Thanh toán</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
            <Text style={styles.textBtn}>Hủy</Text>
        </TouchableOpacity>
    </View>
);

export default Payment;

const styles = StyleSheet.create({
    paymentContainer:{
        flex: 1,
    },
    item: {
        width: '100%',
        height: 100,
        justifyContent: 'center',

    },
    text:{ 
        width: '80%',
        fontSize: 16,
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
    },
    btn1: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor:'#FFDD67',
    },
    btn2: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor:'#FF7867',
    },
    textBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
    },
});