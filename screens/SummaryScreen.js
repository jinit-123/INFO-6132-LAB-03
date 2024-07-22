import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50, date: '2023-07-20' },
  { id: '2', name: 'Rent', amount: 500, date: '2023-07-01' },
  { id: '3', name: 'Utilities', amount: 100, date: '2023-07-15' },
  { id: '4', name: 'Nike', amount: 250, date: '2023-07-20' },
  { id: '5', name: 'Tim Hortons', amount: 7.89, date: '2023-07-01' },
];

export default function SummaryScreen() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0); // Assuming balance is provided or calculated
  const [highestSpending, setHighestSpending] = useState({});
  const [lowestSpending, setLowestSpending] = useState({});

  useEffect(() => {
    const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    setTotalExpenses(total);
    setBalance(692.39); // Set balance as required

    const highest = transactions.reduce((prev, current) => (prev.amount > current.amount) ? prev : current);
    const lowest = transactions.reduce((prev, current) => (prev.amount < current.amount) ? prev : current);
    setHighestSpending(highest);
    setLowestSpending(lowest);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${balance.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>High Spending</Text>
        <Text style={styles.highSpending}>{highestSpending.name}</Text>
        <Text style={styles.value}>${highestSpending.amount?.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Low Spending</Text>
        <Text style={styles.lowSpending}>{lowestSpending.name}</Text>
        <Text style={styles.value}>${lowestSpending.amount?.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  highSpending: {
    fontSize: 16,
    color: 'blue',
  },
  lowSpending: {
    fontSize: 16,
    color: 'blue',
  },
});
