import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { RootTabScreenProps } from "../types";
import AcccountCard from "../components/AcccountCard";
import Transactions, { transactions } from "../components/Transactions";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          // flex: 1,
          backgroundColor: "white",
          paddingTop: 20,
        }}
      >
        <AcccountCard />
        <View className="flex-col mt-6 w-[90%] ">
          <View className="flex-row items-center justify-between my-2 ">
            <Text className="text-gray-800 text-xl font-semibold ">
              Transactions
            </Text>
            <Text className="text-gray-400 ">See All</Text>
          </View>
          <Transactions transactions={transactions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
