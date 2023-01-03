import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import { useMemo, useState } from "react";
import Transactions, { transactions } from "../components/Transactions";

export default function OverviewScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          // flex: 1,
          backgroundColor: "white",
          paddingTop: 20,
        }}
      >
        <TotalIAE />
        <StatsChart />
        <TypeTransactions />
      </ScrollView>
    </SafeAreaView>
  );
}

const TotalIAE = () => {
  return (
    <View className="items-center space-x-3 w-[90%] flex-row">
      <View className=" bg-income/10 px-5 py-4 rounded-2xl space-y-1 flex-1 items-center ">
        <Text className="text-gray-400 text-lg font-medium ">Total Income</Text>
        <View className="flex-row items-center space-x-2 self-center ">
          <View className="p-1 bg-income rounded-full ">
            <AntDesign size={12} name="arrowdown" color="white" />
          </View>
          <Text className="text-gray-800 text-base font-medium">₹8,500</Text>
        </View>
      </View>
      <View className=" bg-expense/10 px-6 py-4 rounded-2xl space-y-1 flex-1  ">
        <Text className="text-gray-400 text-lg font-medium ">
          Total Expenses
        </Text>
        <View className="flex-row items-center space-x-2 self-center ">
          <View className="p-1 bg-expense rounded-full ">
            <AntDesign size={12} name="arrowup" color="white" />
          </View>
          <Text className="text-gray-800 text-base font-medium">₹8,500</Text>
        </View>
      </View>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `#fa805f`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
  barRadius: 5,
  propsForLabels: {
    stroke: "#94a3b8",
    fontSize: "10",
    fill: "#d1d5db",
    // textAnchor: "middle",
    fontWeight: "300",
  },
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientToOpacity: 1,
  propsForBackgroundLines: {
    stroke: "#d1d5db",
  },
};

const StatsChart = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View className="my-5 w-[90%] ">
      <Text className="text-xl text-gray-800 py-1 font-semibold ">
        Statistics
      </Text>
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-gray-500">Apr01 - Apr30</Text>
      </View>
      <BarChart
        showBarTops={false}
        fromZero
        withInnerLines
        data={{
          labels: ["Week1", "Week2", "Week3", "Week4"],
          datasets: [
            {
              data: [30, 45, 28, 80],
            },
          ],
        }}
        width={screenWidth * 0.9}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        yAxisSuffix=""
        // verticalLabelRotation={30}
        style={{
          marginVertical: 20,
        }}
      />
    </View>
  );
};

const TypeTransactions = () => {
  const [showExpenses, setShowExpenses] = useState<boolean>(true);
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      if (showExpenses) {
        return transaction.type === "expense";
      } else {
        return transaction.type === "income";
      }
    });
  }, [showExpenses, transactions]);

  return (
    <View className="w-full items-center ">
      <View className="flex-row items-center w-[90%] ">
        <Pressable
          className={`flex-1 items-center rounded-md bg-income/10 py-2 ${
            !showExpenses && " bg-income"
          }`}
          onPress={() => {
            setShowExpenses(false);
          }}
        >
          <Text
            className={`text-base font-medium text-gray-800  ${
              !showExpenses && "text-white bg-income"
            } `}
          >
            Income
          </Text>
        </Pressable>
        <Pressable
          className={`flex-1 items-center rounded-md bg-expense/10 py-2 ${
            showExpenses && " bg-expense"
          }`}
          onPress={() => {
            setShowExpenses(true);
          }}
        >
          <Text
            className={`text-base font-medium text-gray-800  ${
              showExpenses && "text-white "
            } `}
          >
            Expenses
          </Text>
        </Pressable>
      </View>
      <Transactions transactions={filteredTransactions} />
    </View>
  );
};
