import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Category, Transaction } from "../typings";

const expenseCat = [
  {
    id: "1",
    name: "Food",
    image: require("../assets/images/categories/food.png"),
  },
  {
    id: "2",
    name: "Transportation",
    image: require("../assets/images/categories/transportation.jpg"),
  },
  {
    id: "3",
    name: "Shopping",
    image: require("../assets/images/categories/shopping.png"),
  },
  {
    id: "4",
    name: "Groceries",
    image: require("../assets/images/categories/groceries.jpg"),
  },
] as Category[];

const incomeCat = [
  {
    id: "1",
    name: "Salary",
    image: require("../assets/images/categories/salary.png"),
  },
  {
    id: "2",
    name: "Investment",
    image: require("../assets/images/categories/investment.jpg"),
  },
] as Category[];

const cashCard = {
  id: "1",
  name: "Cash",
  balance: 0,
} as Card;

const AppContext = createContext({
  incomeCategories: incomeCat,
  expenseCategories: expenseCat,
  cards: [] as Card[],
  transactions: [] as Transaction[],
  balance: 0,
  setIncomeCategories: (incomeCategories: Category[]) => {},
  setExpenseCategories: (expenseCategories: Category[]) => {},
  setCards: (cards: Card[]) => {},
  setTransactions: (transactions: Transaction[]) => {},
  setBalance: (balance: number) => {},
  addTransaction: (transaction: Transaction) => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [incomeCategories, setIncomeCategories] =
    useState<Category[]>(incomeCat);
  const [expenseCategories, setExpenseCategories] =
    useState<Category[]>(expenseCat);
  const [isLoading, setIsLoading] = useState(false);

  console.log(cards);
  useEffect(() => {
    setIsLoading(true);
    // AsyncStorage.clear();
    AsyncStorage.getItem("cards").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("cards", JSON.stringify([cashCard]));
        AsyncStorage.setItem("transactions", JSON.stringify([]));
        AsyncStorage.setItem("incomeCategories", JSON.stringify(incomeCat));
        AsyncStorage.setItem("expenseCategories", JSON.stringify(expenseCat));
      } else {
        AsyncStorage.getItem("transactions").then((value) => {
          if (value !== null) {
            setTransactions(JSON.parse(value));
          }
        });
        AsyncStorage.getItem("incomeCategories").then((value) => {
          if (value !== null) {
            setIncomeCategories(JSON.parse(value));
          }
        });
        AsyncStorage.getItem("expenseCategories").then((value) => {
          if (value !== null) {
            setExpenseCategories(JSON.parse(value));
          }
        });
        AsyncStorage.getItem("cards").then((value) => {
          if (value !== null) {
            setCards(JSON.parse(value));
          }
        });
      }
      setIsLoading(false);
    });
  }, []);

  const addTransaction = async (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    await AsyncStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, transaction])
    );
  };

  return (
    <AppContext.Provider
      value={{
        cards,
        setCards,
        transactions,
        setTransactions,
        balance,
        setBalance,
        incomeCategories,
        setIncomeCategories,
        expenseCategories,
        setExpenseCategories,
        addTransaction,
      }}
    >
      {isLoading ? null : children}
    </AppContext.Provider>
  );
};

export default AppContext;