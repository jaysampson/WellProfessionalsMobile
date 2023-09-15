import { View, Text, ScrollView } from "react-native";
import React from 'react'
import CartComp from '../../../components/mainComponents/CartComp'

const CartScreen = () => {
  return (
    <ScrollView>
      <CartComp />
    </ScrollView>
  );
}

export default CartScreen