import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity, Modal,Pressable } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const items = [
    {
        id: 1,
        name: 'Ramen',
        img: 'https://www.seriouseats.com/thmb/BT00zHIeyxue3IZg8hLeSdGSQ0s=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__10__20141023-halloween-ramen-vicky-wasik-3-9ea7a47a13f24a7a83314cf76cd05d0e.jpg',
        price: "70.000",
        cateId: 1,
        mota:'Món ăn đặc trưng của Nhật Bản'
    },
    {
        id: 2,
        name: 'Phở',
        img: 'https://thumbs.dreamstime.com/b/noodle-bowl-dark-background-theme-food-photography-noodle-bowl-black-background-111843225.jpg',
        price: "50.000",
        cateId: 1,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 3,
        name: 'Hủ Tiếu',
        img: 'https://thumbs.dreamstime.com/b/noodle-bowl-black-background-dark-theme-food-photography-111843379.jpg',
        price: "50.000",
        cateId: 1,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 9,
        name: 'Hamburger',
        img: 'https://thumbs.dreamstime.com/b/black-burger-black-background-cheeseburger-recipes-fast-food-black-burger-black-background-cheeseburger-recipes-fast-171114034.jpg',
        price: "50.000",
        cateId: 2,
        mota:'Món Việt Nam ai cũng thích aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id: 8,
        name: 'Black Coffee',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
        price: "50.000",
        cateId: 3,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 7,
        name: 'Milk Coffee',
        img: 'https://whiteonricecouple.com/recipe/images/Vietnamese-Iced-Coffee-Recipe-1.jpg',
        price: "50.000",
        cateId: 3,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 6,
        name: 'Ice tea',
        img: 'https://product.hstatic.net/200000377199/product/tra_chanh_-_lemon_ice_tea_365d1f604a6b4277a8bdf7715c8b8bd3_master.png',
        price: "50.000",
        cateId: 3,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 4,
        name: 'Milk Shake',
        img: 'https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg',
        price: "50.000",
        cateId: 3,
        mota:'Món Việt Nam ai cũng thích'
    },
    {
        id: 5,
        name: 'Chocolate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTard2n4-yUudHqkSZYvqG0-Gh8Qkgm4kKa_6FNbouBR7BClI44sgEjNNDs4nJzl87uCKo&usqp=CAU',
        price: "50.000",
        cateId: 3,
        mota:'Món Việt Nam ai cũng thích'
    },

]

const Food = ({
    navigation,route
}) => {
    
    const {productId} = route.params;
    const {productImg} =route.params;
    const {productName} =route.params;
    const [id,setId]=useState(productId);
    const [showModal,setShowModal]=useState(false);
    const MainComponent = ({ item }) => {
        return (
            item.cateId == id ? 
                <View style={styles.mainContent}>
                    <TouchableOpacity  style={styles.mainContainer} onPress={()=>setShowModal(true)} >
                        <Image source={{uri: item.img}} style={styles.foodImg} />
                        <Text style={{fontWeight:'700',fontSize:16}}>{item.name} </Text>
                        <View style={styles.btnPrice}>
                        <Text style={{textAlign:'center',fontSize:16}}>{item.price} VND</Text>
                        </View>
                        <Modal
                            transparent={true}
                            visible={showModal}
                            animationType={'fade'}
                            onRequestClose={()=>setShowModal(false)}>
                             <Pressable onPress={(evt)=>evt.target==evt.currentTarget ? setShowModal(false):setShowModal(true)} style={styles.modalContainer}>
                                 <View style={styles.modalContent}> 
                        
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%'}}>
                             
                                    <View style={styles.imgContainer}>
                                        <Image style={styles.img} key={item.id} source={{uri: item.img} }/>
                                        <Text style={styles.txtF}>{item.name}    </Text>    
                                        <Text style={{flexWrap:'wrap',padding:5}}>{item.mota}</Text>                       
                                    </View>
                                     </View>
                                 </View>
                            <View style={{flexDirection:'row',top:-50,justifyContent:'space-between',width:'90%'}}>
                                <View style={{justifyContent:'space-between',width:'40%',flexDirection:'row'}}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Ionicons
                                        name='add-outline'
                                        size={15}
                                        color='#fff'>  
                                        </Ionicons>
                                    </TouchableOpacity>
                                    <Text style={{justifyContent:'center',alignSelf:'center'}}>1</Text>
                                    <TouchableOpacity style={styles.btn}>
                                        <Ionicons
                                            name='remove-outline'
                                            size={15}
                                            color='#fff'>  
                                        </Ionicons>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.cartBtn}>
                                    <Text style={{color:'#fff'}}>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                       
                </Pressable>
            </Modal>
                        
                   
                    </TouchableOpacity>
                 </View>
            
           :
           <View style={{display:'none'}}>
                
            </View>
        )
        
    }
    return(
    <View style={styles.foodContainer}>
        <View style={styles.foodHeader}>
            <ImageBackground source={{uri: productImg}} resizeMode='cover' style={styles.headerImg} 
            />
            
            <TouchableOpacity style={styles.btnBack} onPress={()=>{navigation.goBack()}}>
            <Ionicons
            name='arrow-back-outline'
            size={15}
            color='#fff'
            
            />
            </TouchableOpacity>
           
        </View>
        <View style={styles.foodMain}>
           <View style={styles.foodMenu}>
                <Text style={{fontSize:20,fontWeight:'800'}}>{productName}</Text>
           </View>
            <FlatList 
            keyExtractor={item=>item.id.toString()}
            numColumns={2}
            data={items}
            renderItem={MainComponent}>
                
            </FlatList>
           
        </View>
        
       
    </View>
    )

   
}
export default Food;
const width=Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
    foodContainer:{
        flex:1
    },
    foodHeader:{
        flex:2,
        
    },
    foodMain:{
        flex:4,
        top:-20,
        width:'100%',
        height:'100%',
        borderRadius:25,
        backgroundColor:'#FFF'
    },
    headerImg:{
        height:'100%',
        width:'100%',
        padding:20,

    },
    foodMenu:{
        padding:20
    },
    mainContent:{
        width:width / 2,
        padding:15,
        paddingBottom:30,
        marginLeft:10,
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
        
    },
    mainContainer:{
        width:'100%',
        
        borderRadius:20,
        
    },
    foodImg:{
        width:'100%',
        height:100,
        borderRadius:20
    },
    btnPrice:{
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        height:30,
        justifyContent:'center'
    },
    btnBack:{
        width:40,
        height:40,
        borderRadius:20,
        top:-200,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:25,
        backgroundColor:'#414146',
        opacity:0.8
    },
    modalContainer:{
        width:'100%',
        height:'93%',
        backgroundColor:'rgba(1,1,1,0.5)',
        paddingTop:'40%'

    },
    modalContent:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:15,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius:15,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0
    },
    imgContainer: {
        width: '100%',
        height: 250,
      
    },
    titleContent:{
        alignSelf:'center'     ,
        justifyContent:'center',
        textAlign:'center',
        
    },
    txtF:{
        padding:5,
        fontSize:16,
        fontWeight:'700'
    },
    btn:{
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#414146',
        opacity:0.8
    },
    cartBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        borderRadius:20,
        width:'60%',
        marginLeft:30
    }
});