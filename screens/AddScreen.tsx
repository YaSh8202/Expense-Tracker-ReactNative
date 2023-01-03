import { SafeAreaView, ScrollView } from "react-native";

import { RootTabScreenProps } from "../types";
import AcccountCard from "../components/AcccountCard";
import Transactions, { transactions } from "../components/Transactions";

export default function AddScreen({ navigation }: RootTabScreenProps<"Add">) {
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
        <Transactions transactions={transactions} />
      </ScrollView>
    </SafeAreaView>
  );
}
