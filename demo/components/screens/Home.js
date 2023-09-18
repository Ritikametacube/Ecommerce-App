import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { COLOURS, Items } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon, Button } from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: "All categories", value: "All categories" },
  { label: "Laptop", value: "Laptop" },
  { label: "TV", value: "TV" },
  { label: "Handbags", value: "Handbags" },
  { label: "Mobile", value: "Mobile" },
  { label: "Shoes", value: "Shoes" },
  { label: "Earphones", value: "Earphones" },
  { label: "Speaker", value: "Speaker" },
  { label: "Watch", value: "Watch" },
]

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [searchProduct, setSearchProduct] = useState("")
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const [category, setCategory] = useState("All categories")

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
      getTotalCountOfCartItems()
    });

    return unsubscribe;
  }, [navigation]);

  const getTotalCountOfCartItems = async () => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      setCartItemsCount(itemArray.length);
    }
    else setCartItemsCount(0)
  };

  // products.filter(p => p.category === category)

  // console.log(products.filter(p => p.category === category))

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      productList.push(Items[index])
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card
  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
        style={{
          width: '48%',
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        {data.category == 'accessory' || data.category === 'product' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}>
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}>
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text style={{ color: "black" }}>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,

          }}>
          <TouchableOpacity>
          </TouchableOpacity>
          <View
            style={{
              marginBottom: 10,
              marginRight: 16
            }}>
            <Text
              style={{
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginRight: 40,
              }}>
              Ecommerce App
            </Text>
          </View>
          <View>
            <Button containerStyle={{ borderRadius: 10 }} title={`Cart ${cartItemsCount}`} onPress={() => navigation.navigate('MyCart')} />
          </View>
        </View>

        <View style={{ width: "100%", padding: 16, paddingTop: 0 }}>
          <TextInput
            style={{ borderColor: "black", borderWidth: 2, fontSize: 16, paddingLeft: 15, color: "black", borderRadius: 10, height: 42 }}
            placeholderTextColor={"black"}
            placeholder='Search'
            value={searchProduct}
            onChangeText={(e) => setSearchProduct(e)}
          />
        </View>
        <View style={{ width: "100%", padding: 16, paddingTop: 0 }}>
          <Dropdown
            style={{ borderColor: "black", borderWidth: 2, borderRadius: 10, paddingLeft: 15 }} placeholderStyle={{ color: "black" }}
            placeholder='Search By Category'
            itemTextStyle={{ color: "black" }}
            data={data}
            labelField="label"
            valueField="value"
            value={category}
            onChange={c => setCategory(c.value)}
            selectedTextStyle={{ color: "black" }}
            search
            iconColor='black'
          />
        </View>

        <View
          style={{
            padding: 16,
            paddingBottom: 0
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: -20
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  marginBottom: 10
                }}>
                Products
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {products.filter((p) => p.productName.includes(searchProduct))
              .filter(p => p.category === category || category === "All categories")
              .map(data => {
                return <ProductCard data={data} key={data.id} />;
              })}
          </View>
        </View>

        <View
          style={{
            paddingLeft: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
