import { SafeAreaView, ScrollView } from "react-native";

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
        <Transactions transactions={transactions} />
      </ScrollView>
    </SafeAreaView>
  );
}
