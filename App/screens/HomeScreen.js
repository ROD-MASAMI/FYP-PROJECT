import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import COLORS from '../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import houses from '../consts/houses';
import axios, { Axios } from 'axios';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const HomeScreen = () =>{
    const getItemLayout = useCallback(
        (data, index) =>({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        }),
        []
    );

     const Categories = () =>{
         const [selectedIndex, setSelectedIndex]= React.useState(
             0,
         );
         const categoryList = ['Popular', 'Recommended', 'Vacant'];
         return <View style={styles.categoryContainer}>
             {categoryList.map((category, index) =>(
                 <TouchableOpacity key={index} onPress={()=> setSelectedIndex(index)}>
                 <Text style={[styles.listText, (index == selectedIndex && styles.activeList),]}>{category}
                 </Text>
                 </TouchableOpacity>
             ))}
         </View>
     };

     const Card = ({item}) =>{
         return (<View style={styles.card}>
             <Image source={item.image} style={styles.cardImage} />
             <View style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 marginTop: 10,
             }}>  
               <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
               <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.blue}}>{item.price}</Text>
              </View>
              <Text style={{color:COLORS.grey, fontSize: 14, marginTop: 5}}>{item.location}</Text>
         <View style={{marginTop:10, flexDirection: 'row'}}>
             <View style={styles.facility}>
             <FontAwesome name="bed" size={18} color="black" />
             <Text style={styles.facilityText}>{item.bedroom}</Text>
             </View>
             <View style={styles.facility}>
             <FontAwesome name="bathtub" size={18} color="black" />
             <Text style={styles.facilityText}>{item.bathroom}</Text>
             </View>
             <View style={styles.facility}>
             <MaterialIcons name="aspect-ratio" size={18} color="black" />
             <Text style={styles.facilityText}>{item.size}</Text>
             </View>
         </View>
         </View>
         );
     };
 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
         
     <SafeAreaView style={{backgroundColor: 'lightgrey', flex: 1,}}>

<View style={styles.header}>
<View>
    <Text style={{color:'grey'}}>WELCOME</Text>
    <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>RODNEY</Text>
</View>
<Image source={require('../assets/person.jpeg')} style={styles.profile}/>
</View>
<View style={{marginTop: 25,}}>
    <View 
       style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           paddingHorizontal: 20,
       }}>
           <View style={styles.search}>
           <MaterialIcons name="search" size={25} color={COLORS.grey} />
           <TextInput style={{paddingBottom:15, paddingLeft:10}} placeholder='search address, city, location'/>
           </View>
           <View style={styles.sortBtn}>
           <MaterialIcons name="tune" size={25} color={COLORS.white} />
           </View>
       </View>
       <Categories />
       
       
</View>
<FlatList
       contentContainerStyle={{paddingBottom: 20, paddingVertical: 20, paddingLeft: 20,}} 
       vertical={true}
       data={houses}
       getItemLayout={getItemLayout}
       renderItem={Card}           
       />
 </SafeAreaView>
 </TouchableWithoutFeedback>
 );
};


const styles = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderWidth: 0.5,
        
    },
    profile:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    sortBtn:{
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10, 
    },
    search:{
        height: 50,
        paddingTop: 10,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    categoryContainer:{
        marginTop: 40,
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 40,
    },
    listText:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },
    activeList:{
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    card:{
       height: 250,
       backgroundColor: COLORS.white,
       elevation: 10,
       width: width - 40,
       marginBottom: 20,
       padding: 15,
       borderRadius: 20,
    },
    cardImage:{
        width: "100%",
        height: 120,
        borderRadius: 15,
    },
    facility:{
        flexDirection: 'row',
        marginRight: 15, 
    },
    facilityText:{
        marginLeft: 5,
        color: COLORS.grey,

    }
});
export default HomeScreen;











