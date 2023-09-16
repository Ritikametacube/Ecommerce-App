import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFocusEffect } from '@react-navigation/native';

const ItemCard = ({ item, setItemsInCart, itemsInCart }) => {
    const [cartItems, setCartItems] = useState(0);

    const handleRemoveItemFromCart = () => {
        if (cartItems === 0) return;
        const newItems = [...itemsInCart]
        newItems[item.id - 1]--;
        setItemsInCart(newItems)
        setCartItems(prev => prev - 1)
    }

    const handleItemToCart = () => {
        const newItems = [...itemsInCart]
        newItems[item.id - 1]++;
        setItemsInCart(newItems)
        setCartItems(prev => prev + 1)
    }


    return (
        <View style={styles.card}>
            <Image style={styles.image} source={item.img} />
            <View style={{ width: wp('70%') }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{`₹${item.price}`}</Text>
                <View style={{ width: wp('50%'), flexDirection: 'row', alignItems: "center", marginLeft: wp("40%") }}>
                    <Button onPress={() => handleRemoveItemFromCart()} color="red" style={styles.button} title='-' />
                    <Text style={{ fontSize: 16, color: 'black', marginHorizontal: 10 }}>{cartItems}</Text>
                    <Button onPress={handleItemToCart} style={styles.button} title='+' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f0eded",
        width: wp("90%"),
        marginTop: 10,
        marginLeft: 30,
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 70,
        width: 70,
        marginRight: 10
    },
    name: {
        color: "black",
        fontSize: 20,
        marginBottom: 10
    },
    price: {
        fontSize: 14,
        color: 'green'
    },
    button: {
        width: 400,
        borderRadius: 10
    }
})

export default ItemCard