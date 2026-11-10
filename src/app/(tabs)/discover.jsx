import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { feedItems } from '../../data';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

export default function DiscoverTab() {
  const router = useRouter();
  const { theme } = useTheme();
  const [query, setQuery] = useState('');

  const filtered = feedItems.filter((i) =>
    i.title.toLowerCase().includes(query.toLowerCase()) ||
    i.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <Header title="Discover" />

      <View style={styles.searchBox}>
        <View style={[styles.searchBar, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Ionicons name="search" size={20} color={colors.primary} style={{ marginRight: 10 }} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            value={query}
            onChangeText={setQuery}
            placeholder="Search discover..."
            placeholderTextColor={colors.gray}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.countText, { color: theme.subText }]}>Showing {filtered.length} results</Text>
        {filtered.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onPress={() => router.push({ pathname: '/details', params: { id: item.id } })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchBox: { paddingHorizontal: 20, marginBottom: 8 },
  searchBar: { height: 50, borderRadius: radius.md, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  input: { flex: 1, fontSize: 15 },
  scroll: { paddingHorizontal: 20, paddingBottom: 24 },
  countText: { fontSize: 13, fontWeight: '600', marginBottom: 12 },
});
