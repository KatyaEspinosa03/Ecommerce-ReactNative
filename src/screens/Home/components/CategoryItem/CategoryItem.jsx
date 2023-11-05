import { Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../../../features/shop/shopSlice";

import { Card } from "../../../../components";
import React from "react";
import styles from "./CategoryItem.style";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("Products", { category });
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}> {category} </Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
