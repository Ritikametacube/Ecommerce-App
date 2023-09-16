import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOURS, Items } from "../database/Database";
import { Button } from "@rneui/themed";

const MyCart = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("cartItems");
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach((data) => {
        const item = items.find((ele) => ele.id === data.id);
        if (item) {
          productData.push({ ...data, count: item.count });
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice =
        productData[index].count * productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart
  const removeItemFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      const index = array.indexOf((ele) => ele.id === id);
      array.splice(index, 1);
      await AsyncStorage.setItem("cartItems", JSON.stringify(array));
      getDataFromDB();
    }
  };

  //checkout
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      return error;
    }

    ToastAndroid.show("Items will be Deliverd SOON!", ToastAndroid.SHORT);

    navigation.navigate("Home");
  };

  const RenderProducts = ({ data }) => {

    const decreaseItemAmount = async () => {
      if (data.count === 1) removeItemFromCart(data.id);
      else {
        let itemArray = await AsyncStorage.getItem("cartItems");
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
          let array = itemArray;
          const item = itemArray.find((ele) => ele.id === data.id);
          const index = itemArray.indexOf(item);
          array[index] = { id: data.id, count: item.count - 1 };
          await AsyncStorage.setItem("cartItems", JSON.stringify(array));
          getDataFromDB();
        }
      }
    };

    const increaseItemAmount = async () => {
      let itemArray = await AsyncStorage.getItem("cartItems");
      itemArray = JSON.parse(itemArray);
      if (itemArray) {
        let array = itemArray;
        const item = itemArray.find((ele) => ele.id === data.id);
        const index = itemArray.indexOf(item);
        array[index] = { id: data.id, count: item.count + 1 };
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        getDataFromDB();
      }
    };

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            height: 100,
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                  color: "black"
                }}
              >
                &#8377;{data.productPrice * data.count}
              </Text>
              <Text>
                (~&#8377;
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 150,
                  marginRight: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                }}
                onPress={decreaseItemAmount}
              >
                <Text style={{ color: "black" }}>-</Text>
              </TouchableOpacity>
              <Text style={{ color: "black" }}>
                {data.count}
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  marginRight: 10,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  marginLeft: 10,
                }}
                onPress={increaseItemAmount}
              >
                <Text style={{ color: "black" }}>+</Text>
              </TouchableOpacity>
            </View>
            <Button containerStyle={{ borderRadius: 8 }} onPress={() => removeItemFromCart(data.id)} title={"Delete"} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: "700",
              marginLeft: 120,

            }}
          >
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: "500",
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}
        >
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {product.length > 0 &&
            product.map((data) => <RenderProducts key={data.id} data={data} />)}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Order Information
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: COLOURS.black,
                }}
              >
                &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                }}
              >
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: COLOURS.black,
                }}
              >
                &#8377;{total / 80}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: COLOURS.black,
                }}
              >
                &#8377;{total + total / 80}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "86%",
            height: "90%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: "uppercase",
            }}
            onPress={() => (total != 0 ? checkOut() : null)}
            containerStyle={{ width: "90%", borderRadius: 10 }}
            title={`CHECKOUT`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
