import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.store}>{transaction.name}</Text>
        <Text style={styles.location}>{transaction.location}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailTitle}>Transaction Date</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4287f5',
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  amount: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  store: {
    fontSize: 20,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  detail: {
    padding: 10,
  },
  detailTitle: {
    fontSize: 16,
    color: '#000',
  },
  detailValue: {
    fontSize: 18,
    color: '#000',
  },
});
