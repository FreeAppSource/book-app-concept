import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { books } from '../data';
import VinylDisc from '../components/VinylDisc';

export default function PlayerScreen() {
  const router = useRouter();
  const { bookId } = useLocalSearchParams();
  const { theme } = useTheme();

  const book = books.find((b) => b.id === bookId) || books[0];

  const [isPlaying, setIsPlaying] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [speed, setSpeed] = useState('1.0x');
  const [showChapters, setShowChapters] = useState(false);

  const speeds = ['1.0x', '1.25x', '1.5x', '2.0x'];

  const cycleSpeed = () => {
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Header (Figma Node 0:7898) */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.headerBtn, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>Now Playing</Text>

        <TouchableOpacity
          style={[styles.headerBtn, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => setIsBookmarked(!isBookmarked)}
        >
          <Ionicons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={isBookmarked ? colors.primary : theme.text}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Vinyl Stylized Artwork (Figma Node 0:7124) */}
        <VinylDisc gradient={book.gradient} isPlaying={isPlaying} />

        {/* Book Meta Details (Figma Node 0:7872) */}
        <View style={styles.metaContainer}>
          <View style={styles.genreBadge}>
            <Text style={styles.genreText}>{book.genre}</Text>
          </View>

          <Text style={[styles.bookTitle, { color: theme.text }]}>{book.title}</Text>
          <Text style={[styles.authorName, { color: theme.subText }]}>{book.author}</Text>
        </View>

        {/* Scrubber & Timestamps (Figma Node 0:7879) */}
        <View style={styles.scrubberContainer}>
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${book.progress * 100}%` }]}>
              <View style={styles.sliderThumb} />
            </View>
          </View>

          <View style={styles.timestampRow}>
            {/* Current Timestamp from Figma: 0:58:34 */}
            <Text style={[styles.timeText, { color: theme.subText }]}>{book.currentTimestamp}</Text>
            {/* Remaining Timestamp from Figma: 1:20:34 */}
            <Text style={[styles.timeText, { color: theme.subText }]}>{book.remainingTimestamp}</Text>
          </View>
        </View>

        {/* Player Controls (Figma Node 0:7886) */}
        <View style={styles.controlsRow}>
          {/* Rewind 15s (Figma Node 0:7891) */}
          <TouchableOpacity style={styles.skipBtn} activeOpacity={0.7}>
            <Ionicons name="play-back" size={26} color={theme.text} />
            <Text style={[styles.skipLabel, { color: theme.subText }]}>-15s</Text>
          </TouchableOpacity>

          {/* Large Circular Play/Pause (Figma Node 0:7895) */}
          <TouchableOpacity
            style={styles.playPauseBtn}
            onPress={() => setIsPlaying(!isPlaying)}
            activeOpacity={0.85}
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={36}
              color={colors.white}
              style={{ marginLeft: isPlaying ? 0 : 4 }}
            />
          </TouchableOpacity>

          {/* Fast Forward 15s (Figma Node 0:7887) */}
          <TouchableOpacity style={styles.skipBtn} activeOpacity={0.7}>
            <Ionicons name="play-forward" size={26} color={theme.text} />
            <Text style={[styles.skipLabel, { color: theme.subText }]}>+15s</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Actions Nav (Figma Node 0:7102) */}
        <View style={[styles.bottomBar, { backgroundColor: theme.card, borderColor: theme.border }]}>
          {/* Speed Toggle */}
          <TouchableOpacity style={styles.barAction} onPress={cycleSpeed}>
            <View style={styles.speedBadge}>
              <Text style={styles.speedText}>{speed}</Text>
            </View>
            <Text style={[styles.barLabel, { color: theme.subText }]}>Speed</Text>
          </TouchableOpacity>

          {/* Chapters */}
          <TouchableOpacity style={styles.barAction} onPress={() => setShowChapters(!showChapters)}>
            <Ionicons name="list" size={22} color={showChapters ? colors.primary : theme.text} />
            <Text style={[styles.barLabel, { color: theme.subText }]}>Chapters</Text>
          </TouchableOpacity>

          {/* Sleep Timer */}
          <TouchableOpacity style={styles.barAction}>
            <Ionicons name="moon-outline" size={22} color={theme.text} />
            <Text style={[styles.barLabel, { color: theme.subText }]}>Sleep</Text>
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity style={styles.barAction}>
            <Ionicons name="share-social-outline" size={22} color={theme.text} />
            <Text style={[styles.barLabel, { color: theme.subText }]}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Expandable Chapters List */}
        {showChapters && (
          <View style={[styles.chaptersBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.chaptersHeading, { color: theme.text }]}>Table of Chapters</Text>
            {book.chapters.map((ch, idx) => (
              <View
                key={ch.id}
                style={[
                  styles.chapterRow,
                  idx < book.chapters.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <Text style={[styles.chapterTitle, { color: idx === 1 ? colors.primary : theme.text }]}>
                    {ch.title}
                  </Text>
                </View>
                <Text style={{ color: theme.subText, fontSize: 13, fontWeight: '600' }}>
                  {ch.duration}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: 'center',
  },
  metaContainer: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  genreBadge: {
    backgroundColor: '#FFE6B1',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: radius.full,
    marginBottom: 10,
  },
  genreText: {
    color: '#D97706',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  bookTitle: {
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 4,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '600',
  },
  scrubberContainer: {
    width: '100%',
    marginVertical: 14,
  },
  sliderTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E8ECF2',
    position: 'relative',
    marginBottom: 8,
  },
  sliderFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
    position: 'relative',
  },
  sliderThumb: {
    position: 'absolute',
    right: -8,
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    borderWidth: 3,
    borderColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  timestampRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 36,
  },
  skipBtn: {
    alignItems: 'center',
  },
  skipLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 2,
  },
  playPauseBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 14,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginTop: 10,
  },
  barAction: {
    alignItems: 'center',
  },
  speedBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    marginBottom: 4,
  },
  speedText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '800',
  },
  barLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  chaptersBox: {
    width: '100%',
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
  },
  chaptersHeading: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 12,
  },
  chapterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  chapterTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
});
