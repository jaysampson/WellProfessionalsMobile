import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import CartComp from "../../../components/mainComponents/CartComp";
import { useMutation, useQuery } from "react-query";
import { createOrder, createPaymentIntent, getAllCourses } from "../../../helper/api";
import { useStripe } from "@stripe/stripe-react-native";
import useAuthStore from "../../../stores";
import useCourseCartStore from "../../../stores/cartStores";

const CartScreen = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const authUser = useAuthStore((state) => state.authUser);
  const user_Id = authUser.others._id;

  // const { coursesItem, removeFromCart, getTotalAmount, totalAmount } =
  //   useCartStore((state) => state);

    const { coursesItem, getTotalAmount, removeFromCart, totalAmount } = useCourseCartStore(
      (state) => ({
        coursesItem: state.coursesItem, 
        getTotalAmount: state.getTotalAmount, 
        removeFromCart: state.removeFromCart,
        totalAmount:state.totalAmount,
      })
    );

  // console.log( JSON.stringify(coursesItem), "authUser");
  const course_Id = coursesItem.map((c:any)=>c._id);
  console.log(course_Id, "course_Id");

  const handleRemoveFromCart = (item:object) => {
    removeFromCart(item);
    getTotalAmount();
  };

    const createOrderData = useMutation({
      mutationKey:['createOrder'],
      enabled: true,
      mutationFn: () =>
        createOrder({
          userId: user_Id,
              courseId: "650fed2054c8a1d056827615",
              payment_info: data?.paymentIntent,
        }),
      onSuccess: (data) => {
        console.log(data, "success");
        // if (data) {
        //   createOrder({
        //     userId: user_Id,
        //     courseId: "650fed2054c8a1d056827615",
        //     payment_info: data?.paymentIntent,
        //   });
        // }
      },
      onError: (error) => {
        console.log(error, "errorr");
      },
    });

    console.log(createOrderData, "createOrderData");

  const { mutate, data } = useMutation({
    mutationKey: ["payment"],
    mutationFn: createPaymentIntent,
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.log(error, "errorr");
    },
  });

  // console.log(data, "intent");

  const onCheckout = async () => {
    // 1. Create a payment intent
    mutate({
      amount: totalAmount,
      // cart: coursesItem,
      // userId: user_Id,
    });

    // 2. Initialize the Payment sheet
    const initRespond = await initPaymentSheet({
      merchantDisplayName: "Well Professional",
      paymentIntentClientSecret: data?.paymentIntent,
    });
    if (initRespond.error) {
      console.log(initRespond.error);
      Alert.alert("Something went wrong");
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }

    // 4. If payment ok -> create the order
    // onCreateOrder();
  };
  return (
    <CartComp
      onCheckout={onCheckout}
      coursesItem={coursesItem}
      totalAmount={totalAmount}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );
};

export default CartScreen;
