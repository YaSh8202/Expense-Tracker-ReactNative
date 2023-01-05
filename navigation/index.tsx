/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  AddStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import OverviewScreen from "../screens/OverviewScreen";
import AddScreen from "../screens/AddScreen";
import AddExpense from "../screens/AddExpense";
import AddIncome from "../screens/AddIncome";
import MyCardsScreen from "../screens/MyCardsScreen";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const AddStack = createNativeStackNavigator<AddStackParamList>();

function AddTransNavigator() {
  return (
    <AddStack.Navigator initialRouteName="Add">
      <AddStack.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: "Add Transaction",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <AddStack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          title: "Add Expense",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <AddStack.Screen
        name="AddIncome"
        component={AddIncome}
        options={{
          title: "Add Income",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      {/* <AddStack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </AddStack.Group> */}
    </AddStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#8033f7",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="home-filled"
              color={color}
              size={25}
              style={{ marginBottom: -3 }}
            />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       // color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarLabel: () => null,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="insert-chart"
              color={color}
              size={25}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddStack"
        component={AddTransNavigator}
        options={{
          tabBarLabel: () => null,
          headerTitleAlign: "center",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="pluscircle"
              color={color}
              size={25}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyCards"
        component={MyCardsScreen}
        options={({ navigation }: RootTabScreenProps<"MyCards">) => ({
          tabBarLabel: () => null,
          headerTitleAlign: "center",
          headerShown: true,
          headerShadowVisible: false,
          title: "My Cards",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-wallet"
              color={color}
              size={25}
              style={{ marginBottom: -3 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                backgroundColor: "rgba(229,231, 235,0.3)",
                padding: 5,
                borderRadius: 10,
              })}
            >
              <AntDesign
                name="plus"
                size={22}
                // color={Colors[colorScheme].text}
                style={{}}
              />
            </Pressable>
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
