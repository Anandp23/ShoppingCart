import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch} from 'react-redux';
import { removeProductFromMyCart } from "./MyCartSlice";

const MyCart = () => {
    const myCartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <View style={{ flrx: 1 }}>
            {myCartItems.length > 0 ? (
                <FlatList data={myCartItems} renderItem={({ item, index }) => {
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
                                    onPress={() => { dispatch(removeProductFromMyCart(item.id)) }}
                                    style={{ height: 40, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10, marginLeft: 40 }}>
                                    <Image
                                        style={{ height: 30, width: 30 }}
                                        source={require('../src/images/failed.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
                />
            ) : (
                <View style={{ height:'100%',width:'100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No Items Added in Cart</Text>
                </View>
            )}

        </View>

    )
}

export default MyCart;