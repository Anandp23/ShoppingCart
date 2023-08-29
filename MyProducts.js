import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart } from './redux/MyCartSlice';
import { useNavigation } from '@react-navigation/native';



const MyProducts = () => {
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  console.log('added product in mycart', myCartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, }}>
      <View style={{ height: 60, width: '100%', flexDirection: 'row', backgroundColor: 'white', elevation: 2, alignItems: 'center', }}>
        <Text style={{ fontSize: 28, marginLeft: 20, color: 'black', }}>Books</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('MyCart') }}>
          <View style={{ height: 40, width: 40,flexDirection:'row',marginLeft:280 }}>
            <Image
              style={{ height: 35, width: 35, marginLeft: 0 }}
              source={require('./src/images/bag.png')} />
            <View style={{ height: 20, width: 20, backgroundColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center',marginLeft:-35,marginTop:15 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{myCartItems.length}</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
      <FlatList data={myProducts} renderItem={({ item, index }) => {
        return (
          <View style={{ width: '95%', height: 180, backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, elevation: 1, flexDirection: 'row', borderBottomWidth: .5, padding: 10 }}>
            <Image
              style={{ width: 100, height: 160, borderRadius: 10 }}
              source={{ uri: item.image }} />
            <View style={{ height: 160, width: 200, marginTop: -10 }}>
              <Text
                style={{ color: 'black', marginTop: 10, fontSize: 26, marginLeft: 10 }}>{item.name}</Text>
              <Text
                style={{ color: 'black', padding: 10, fontSize: 16 }}>by {item.author}</Text>

            </View>
            <View>
              <TouchableOpacity
                onPress={() => { dispatch(addProductToMyCart(item)) }}
                style={{ height: 40, width: 85, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5258fa', borderRadius: 15, marginTop: 120, marginLeft: -185 }}>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
      />
    </View>
  )
}

export default MyProducts;
