import {  Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomInput } from "../components/AddTransactionForm";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { Card } from "../typings";

export default function AddCardModal() {
  const navigation = useNavigation();
  const [title, setTitle] = React.useState("");
  const [balance, setBalance] = React.useState("0");
  const {addCard} = React.useContext(AppContext);
  const submitHandler = async () => {
    const newCard = {
      id: Math.random().toString(),
      name: title,
      balance: parseFloat(balance),
    } as Card;
    await addCard(newCard);
    navigation.goBack();
  };
  return (
    <View
      style={{
        alignItems: "center",
        // flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
        minHeight: "100%",
        width: "100%",
      }}
    >
      <View className="w-[87%] flex-col justify-between  ">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <CustomInput
          title={"Card Name"}
          props={{
            // placeholder: "eg. Dinner with friends",
            value: title,
            onChangeText: (text: string) => setTitle(text),
          }}
        />
        <CustomInput
          title="Initial Balance"
          props={{
            keyboardType: "decimal-pad",
            value: balance,
            onChangeText: (text: string) => setBalance(text),
          }}
        />
        

        <Pressable
          onPress={submitHandler}
          className={`  rounded-xl bg-income w-full py-3   `}
        >
          <Text className="text-xl text-white text-center ">Add Card</Text>
        </Pressable>
      </ScrollView>

      
    </View>
    </View>
  );
}
