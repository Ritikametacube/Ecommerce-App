import React, { useState } from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import ItemCard from './ItemCard';
import { useFocusEffect } from '@react-navigation/native';

const items = [
    {
        id: 1,
        img: require('./assets/headphones.jpg'),
        name: 'Headphones',
        price: 1900
    },
    {
        id: 2,
        img: require('./assets/iPhone.jpg'),
        name: "Iphone",
        price: 14000
    },
    {
        id: 3,
        img: require('./assets/laptop.jpg'),
        name: 'Laptop',
        price: 75000
    },
    {
        id: 4,
        img: require('./assets/purse.jpg'),
        name: "Purse",
        price: 1850
    },
    {
        id: 5,
        img: require('./assets/shoes.jpg'),
        name: 'Shoes',
        price: 1600
    },
    {
        id: 6,
        img: require('./assets/shoes2.jpg'),
        name: "New Shoes",
        price: 2400
    },
    {
        id: 7,
        img: require('./assets/tshirt.jpg'),
        name: "T-shirt",
        price: 799
    },
    {
        id: 8,
        img: require('./assets/tablet.jpg'),
        name: "Tablet",
        price: 39000
    },
    {
        id: 9,
        img: require('./assets/trowsers2.jpg'),
        name: "Trousers",
        price: 999
    },
    {
        id: 10,
        img: require('./assets/smartwatch.jpg'),
        name: "Smart-Watch",
        price: 1900
    }
]

const itemID = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const ItemLists = ({ navigation }) => {
    const [itemsInCart, setItemsInCart] = useState(itemID)

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ alignItems: "center", width: "90%", marginTop: 10, marginBottom: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginLeft: 30, marginRight: 110, color: "black", fontSize: 18 }}>Shopping Cart</Text>
                    <Button onPress={() => navigation.navigate('cart', itemsInCart)} title='Go to Cart' />
                </View>
                {items.map(item => <ItemCard itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} key={item.id} item={item} />)}
            </View>
        </ScrollView>
    )
}

export default ItemLists