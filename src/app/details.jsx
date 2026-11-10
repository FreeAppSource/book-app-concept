import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';
import { books } from '../data';
import Header from '../components/Header';
import Button from '../components/Button';

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const [saved, setSaved] = useState(false);

  const book = books.find((b) => b.id === id) || books[0];
  const openPlayer = () => router.push({ pathname: '/player', params: { bookId: book.id } });

  const stats = [
    { icon: 'star', iconColor: '#FFBC52', value: book.rating, label: `${book.reviews} reviews` },
    { icon: 'time-outline', iconColor: colors.primary, value: book.duration, label: 'Listening' },
    { icon: 'list-outline', iconColor: colors.coral, value: String(book.chapters.length), label: 'Chapters' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <Header
        showBack
        title="Details"
        actionIcon={saved ? 'bookmark' : 'bookmark-outline'}
        onActionPress={() => setSaved((s) => !s)}
      />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Cover — same illustrated gradient language as the Home cards */}
        <View style={styles.coverWrap}>
          <LinearGradient colors={book.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.cover}>
            <View style={styles.decorCircleLarge} />
            <View style={styles.decorCircleSmall} />
            <Ionicons name="book" size={64} color="rgba(255, 255, 255, 0.92)" />
            <View style={styles.genrePill}>
              <Text style={styles.genreText}>{book.genre}</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.text }]}>{book.title}</Text>
          <Text style={[styles.author, { color: theme.subText }]}>{book.author}</Text>

          <View style={[styles.statsCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            {stats.map((s, i) => (
              <View key={s.label} style={[styles.stat, i > 0 && { borderLeftWidth: 1, borderLeftColor: theme.border }]}>
                <View style={styles.statValueRow}>
                  <Ionicons name={s.icon} size={14} color={s.iconColor} />
                  <Text style={[styles.statValue, { color: theme.text }]}>{s.value}</Text>
                </View>
                <Text style={[styles.statLabel, { color: theme.subText }]}>{s.label}</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionHeading, { color: theme.text }]}>About this audiobook</Text>
          <Text style={[styles.desc, { color: theme.subText }]}>{book.description}</Text>

          <View style={[styles.narratorRow, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.narratorIcon}>
              <Ionicons name="mic" size={18} color={colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.narratorLabel, { color: theme.subText }]}>Narrated by</Text>
              <Text style={[styles.narratorName, { color: theme.text }]}>{book.narrator}</Text>
            </View>
          </View>

          <Text style={[styles.sectionHeading, { color: theme.text }]}>Chapters</Text>
          <View style={[styles.chapterList, { backgroundColor: theme.card, borderColor: theme.border }]}>
            {book.chapters.map((c, i) => (
              <TouchableOpacity
                key={c.id}
                activeOpacity={0.7}
                onPress={openPlayer}
                style={[styles.chapterRow, i > 0 && { borderTopWidth: 1, borderTopColor: theme.border }]}
              >
                <Text style={[styles.chapterIndex, { color: colors.primary }]}>{String(i + 1).padStart(2, '0')}</Text>
                <Text style={[styles.chapterTitle, { color: theme.text }]} numberOfLines={1}>
                  {c.title.replace(/^Chapter \d+:\s*/, '')}
                </Text>
                <Text style={[styles.chapterDuration, { color: theme.subText }]}>{c.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Button title="Listen Now" onPress={openPlayer} style={styles.actionBtn} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 40 },
  coverWrap: { alignItems: 'center', paddingTop: 8, paddingBottom: 20 },
  cover: {
    width: 180,
    height: 230,
    borderRadius: radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#242424',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  decorCircleLarge: {
    position: 'absolute', top: -36, right: -36, width: 120, height: 120, borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  decorCircleSmall: {
    position: 'absolute', bottom: -24, left: -24, width: 84, height: 84, borderRadius: 42,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  genrePill: {
    position: 'absolute', bottom: 14, backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingVertical: 3, paddingHorizontal: 12, borderRadius: radius.full,
  },
  genreText: { color: colors.white, fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  info: { paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: '900', textAlign: 'center' },
  author: { fontSize: 14, fontWeight: '500', textAlign: 'center', marginTop: 4, marginBottom: 20 },
  statsCard: { flexDirection: 'row', borderRadius: radius.md, borderWidth: 1, paddingVertical: 14, marginBottom: 24 },
  stat: { flex: 1, alignItems: 'center' },
  statValueRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statValue: { fontSize: 16, fontWeight: '800' },
  statLabel: { fontSize: 12, marginTop: 2 },
  sectionHeading: { fontSize: 17, fontWeight: '800', marginBottom: 8 },
  desc: { fontSize: 14, lineHeight: 22, marginBottom: 16 },
  narratorRow: {
    flexDirection: 'row', alignItems: 'center', borderRadius: radius.md, borderWidth: 1,
    padding: 14, marginBottom: 24,
  },
  narratorIcon: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#EEEFFA',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  narratorLabel: { fontSize: 12 },
  narratorName: { fontSize: 15, fontWeight: '700', marginTop: 1 },
  chapterList: { borderRadius: radius.md, borderWidth: 1, marginBottom: 24 },
  chapterRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16 },
  chapterIndex: { fontSize: 13, fontWeight: '800', width: 28 },
  chapterTitle: { flex: 1, fontSize: 14, fontWeight: '600', marginRight: 8 },
  chapterDuration: { fontSize: 12, fontWeight: '600' },
  actionBtn: { marginHorizontal: 20 },
});
