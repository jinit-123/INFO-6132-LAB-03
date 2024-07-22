import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: '2023-07-20' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: '2023-07-01' },
  { id: '3', name: 'Sephora', amount: 120.00, date: '2023-07-15' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: '2023-07-20' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2023-07-01' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2023-07-15' },
  { id: '7', name: 'Nike', amount: 250.00, date: '2023-07-20' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2023-07-01' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: '2023-07-15' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: '2023-07-20' },
];

export default function TransactionListScreen({ navigation }) {
  const [transactionData, setTransactionData] = useState(transactions);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});
