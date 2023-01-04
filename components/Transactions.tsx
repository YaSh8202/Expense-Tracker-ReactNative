import { View, Text, FlatList } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const transactions = [
  {
    id: "1",
    title: "Transfer to John Doe",
    amount: "$1,000.00",
    date: new Date().toDateString(),
    category: "Transfer",
    type: "expense",
  },
  {
    id: "2",
    title: "Bata store",
    amount: "$1,000.00",
    date: new Date().toDateString(),
    category: "Shopping",
    type: "income",
  },
  {
    id: "3",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "4",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "5",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "6",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "7",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "8",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
  {
    id: "9",
    title: "Uber",
    amount: "150",
    date: new Date().toDateString(),
    category: "Transport",
    type: "expense",
  },
];

type Transaction = {
  id: string;
  title: string;
  amount: string;
  date: string;
  category: string;
  type: string;
};

const Transactions = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <>
      {transactions.map((item, i) => (
        <View key={item.id} className="flex-row items-center my-3  ">
          {/* Image */}
          <View className="items-center justify-center bg-gray-200/30 p-2 rounded-xl ">
            <MaterialIcons
              name="attach-money"
              color={
                item.type === "expense"
                  ? "rgb(239, 68, 68)"
                  : "rgb(34, 197, 94)"
              }
              size={26}
            />
          </View>
          {/* Title and time */}
          <View className="flex-1 items-start space-y-0.5 px-3 ">
            <Text className="font-semibold text-gray-800">{item.title}</Text>
            <Text className="text-sm text-gray-500 ">{item.date}</Text>
          </View>
          {/* Amount */}
          <Text
            className={`${
              item.type === "expense" ? "text-red-500" : "text-green-500"
            } font-medium `}
          >
            {item.type === "expense" ? "-" : "+"}
            {item.amount}
          </Text>
        </View>
      ))}
    </>
  );
};

export default Transactions;
