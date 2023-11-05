import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Products.styles";
import { SearchInput } from "../../components";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopAPI";

const Products = ({ navigation, route }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const { data, isLoading } = useGetProductsByCategoryQuery(category);
  console.log(data);

  useEffect(() => {
    if (!isLoading) {
      const dataArr = Object.values(data);
      setProducts(dataArr);
      const productsFiltered = dataArr.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [isLoading, keyword]);

  return (
    <View style={styles.container}>
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={products}
            numColumns={2}
            columnWrapperStyle={styles.wrapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate("Details", { product: item })
                }
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.images[0],
                  }}
                />
                <Text style={styles.text}> {item.title} </Text>
                <Text style={styles.price}> ${item.price} </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Products;
