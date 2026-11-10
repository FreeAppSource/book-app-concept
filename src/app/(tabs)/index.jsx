import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { categories, books } from '../../data';
import BookCard from '../../components/BookCard';

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [activeTab, setActiveTab] = useState('Trending'); // 'Trending' | 'Popular' | 'New' from node 0:572
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((b) => {
    if (searchQuery) {
      return (
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header (Figma Node 0:5952) */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.headerGreeting, { color: theme.subText }]}>Good Day,</Text>
            <Text style={[styles.headerTitle, { color: theme.text }]}>Discover Audiobooks</Text>
          </View>

          {/* Profile Circle */}
          <TouchableOpacity
            style={[styles.profileCircle, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <Ionicons name="person" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Search Bar (Figma Node 0:5944) */}
        <View style={[styles.searchBar, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Ionicons name="search" size={20} color={colors.primary} style={{ marginRight: 10 }} />
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search audiobooks, authors..."
            placeholderTextColor={colors.textMuted}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        {/* Category Tabs (Figma Node 0:572: Trending, Popular, New) */}
        <View style={styles.tabsContainer}>
          {categories.map((cat) => {
            const isSelected = cat === activeTab;
            return (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.tabButton,
                  isSelected && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab(cat)}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: isSelected ? colors.white : theme.subText },
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Featured Books List (Figma Nodes 0:587, 0:1510, 0:4194) */}
        <View style={styles.bookListHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            {activeTab} Audiobooks
          </Text>
          <Text style={[styles.resultsTag, { color: colors.primary }]}>
            {filteredBooks.length} Available
          </Text>
        </View>

        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onPlay={() => router.push({ pathname: '/player', params: { bookId: book.id } })}
            onPress={() => router.push({ pathname: '/details', params: { id: book.id } })}
          />
        ))}

        {/* Mini Now-Playing Banner */}
        <TouchableOpacity
          style={[styles.miniPlayer, { backgroundColor: colors.primary }]}
          onPress={() => router.push({ pathname: '/player', params: { bookId: 'b1' } })}
          activeOpacity={0.9}
        >
          <View style={styles.miniLeft}>
            <View style={styles.miniIconBox}>
              <Ionicons name="headset" size={18} color={colors.primary} />
            </View>
            <View>
              <Text style={styles.miniTitle}>Under The Rain</Text>
              <Text style={styles.miniAuthor}>Sarah Wins • 0:58:34 / 1:20:34</Text>
            </View>
          </View>
          <Ionicons name="pause" size={20} color={colors.white} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 22,
    paddingBottom: 36,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerGreeting: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    marginTop: 2,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  searchBar: {
    height: 52,
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    gap: 12,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: radius.full,
  },
  activeTabButton: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
  },
  bookListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  resultsTag: {
    fontSize: 13,
    fontWeight: '700',
  },
  miniPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: radius.md,
    marginTop: 8,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  miniLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  miniTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '800',
  },
  miniAuthor: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    marginTop: 2,
  },
});
