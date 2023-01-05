import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootTabScreenProps } from "../types";
import AcccountCard from "../components/AcccountCard";
import Transactions from "../components/Transactions";
import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { transactions } = useContext(AppContext);
  const totalIncome = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactions]);

  const totalExpense = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactions]);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          // flex: 1,
          backgroundColor: "white",
          paddingTop: 20,
          minHeight: "100%",
        }}
      >
        <AcccountCard expense={totalExpense} income={totalIncome} />
        <View className="flex-col mt-6 w-[90%] ">
          <View className="flex-row items-center justify-between my-2 ">
            <Text className="text-gray-800 text-xl font-semibold ">
              Transactions
            </Text>
            <Text className="text-gray-400 ">See All</Text>
          </View>
          <Transactions
            transactions={[...transactions].sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
