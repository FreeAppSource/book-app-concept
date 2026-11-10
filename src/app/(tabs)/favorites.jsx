import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { books } from '../../data';
import BookCard from '../../components/BookCard';

export default function FavoritesTab() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Bookmarked Stories</Text>
        <Text style={[styles.subtitle, { color: theme.subText }]}>
          Your saved fiction & drama audiobooks
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {books.slice(0, 2).map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onPlay={() => router.push({ pathname: '/player', params: { bookId: book.id } })}
            onPress={() => router.push({ pathname: '/details', params: { id: book.id } })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 22, paddingTop: 16, paddingBottom: 12 },
  title: { fontSize: 26, fontWeight: '900', marginBottom: 4 },
  subtitle: { fontSize: 13 },
  scroll: { paddingHorizontal: 22, paddingBottom: 32 },
});
