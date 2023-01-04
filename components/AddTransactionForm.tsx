import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Pressable,
} from "react-native";
import React from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const categories = ["Food", "Transport", "Shopping", "Entertainment", "Health"];

const AddTransactionForm = ({ type }: { type: "Expense" | "Income" }) => {
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("0");
  const [category, setCategory] = React.useState(categories[0]);
  console.log(category);
  const dateHandler = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  console.log(date, title, amount, category);

  return (
    <View className="w-[87%] ">
      <CustomInput
        title={`${type} Title`}
        props={{
          placeholder: "eg. Dinner with friends",
          value: title,
          onChangeText: (text: string) =>
            setTitle(text),
        }}
      />
      <CustomInput
        title="Amount"
        props={{
          keyboardType: "decimal-pad",
          value: amount,
          onChangeText: (text: string) =>
            setAmount(text),
        }}
      />
      <View className="w-full space-y-2 mb-5 ">
        <Text className="text-gray-800 text-lg font-semibold ">Category</Text>
        <View className=" flex-wrap flex-row gap-2 ">
          {categories.map((cat, i) => (
            <Pressable
              onPress={() => setCategory(cat)}
              key={i}
              className={`bg-${
                cat === category
                  ? type.toLowerCase()
                  : `${type.toLowerCase()}/10`
              }
              } py-2 px-3 rounded-md transition-all duration-200 ease-in-out  `}
            >
              <Text
                className={`${
                  cat === category ? "text-white" : "text-gray-800"
                } font-semibold`}
              >
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View className="w-full space-y-2 mb-5 ">
        <Text className="text-gray-800 text-lg font-semibold ">Date</Text>
        <Pressable
          onPress={() => setShowDatePicker(true)}
          className="border border-gray-300  rounded-xl  "
        >
          <Text className="text-lg py-3 px-4 text-gray-600">
            {date.toDateString()}
          </Text>
        </Pressable>
      </View>
      {showDatePicker && (
        <RNDateTimePicker mode="date" value={date} onChange={dateHandler} />
      )}
    </View>
  );
};

export default AddTransactionForm;

const CustomInput = ({ props, title }: { props: any; title: string }) => {
  return (
    <View className="w-full space-y-2 mb-5 ">
      <Text className="text-gray-800 text-lg font-semibold ">{title}</Text>
      <TextInput
        {...props}
        className="border border-gray-300 text-lg py-3 px-4 text-gray-600 rounded-xl  "
      />
    </View>
  );
};
