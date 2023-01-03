import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";

export default function OverviewScreen() {
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 20,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          width: "90%",
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View className="items-center space-x-3 w-full flex-row">
          <View className=" bg-income/10 px-5 py-4 rounded-2xl space-y-1 flex-1 items-center ">
            <Text className="text-gray-400 text-lg font-medium ">
              Total Income
            </Text>
            <View className="flex-row items-center space-x-2 self-center ">
              <View className="p-1 bg-income rounded-full ">
                <AntDesign size={12} name="arrowdown" color="white" />
              </View>
              <Text className="text-gray-800 text-base font-medium">
                ₹8,500
              </Text>
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
              <Text className="text-gray-800 text-base font-medium">
                ₹8,500
              </Text>
            </View>
          </View>
        </View>
        <StatsChart />
      </ScrollView>
    </SafeAreaView>
  );
}
const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `#fa805f`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 2,
  barRadius: 5,
  propsForLabels: {
    stroke: "#6b7280",
    fontSize: "10",
    fill: "#6b7280",
    // textAnchor: "middle",
  },
  propsForBackgroundLines:{
    stroke: "#d1d5db",
  }
};
const StatsChart = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View className="my-5">
      <Text className="text-xl text-gray-800 py-1 font-semibold ">Statistics</Text>
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-gray-500">Apr01 - Apr30</Text>
      </View>
      <BarChart
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
        // style={{
        //   marginVertical: 8,
        // }}
      />
    </View>
  );
};
