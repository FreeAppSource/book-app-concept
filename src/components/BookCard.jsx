import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';

export default function BookCard({ book, onPlay, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Stylized Illustrated Cover Box */}
      <LinearGradient
        colors={book.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.coverBox}
      >
        {/* Subtle decorative circles from Figma vector design */}
        <View style={styles.decorCircleLarge} />
        <View style={styles.decorCircleSmall} />

        {/* Book Icon */}
        <Ionicons name="book" size={36} color="rgba(255, 255, 255, 0.9)" />

        <View style={styles.genrePill}>
          <Text style={styles.genreText}>{book.genre}</Text>
        </View>
      </LinearGradient>

      {/* Book Metadata */}
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
            {book.title}
          </Text>
          <View style={styles.ratingBox}>
            <Ionicons name="star" size={13} color="#FFBC52" />
            <Text style={styles.ratingText}>{book.rating}</Text>
          </View>
        </View>

        <Text style={[styles.author, { color: theme.subText }]}>{book.author}</Text>

        <View style={styles.footerRow}>
          <View style={styles.timeTag}>
            <Ionicons name="time-outline" size={13} color={colors.primary} />
            <Text style={styles.durationText}>{book.duration}</Text>
          </View>

          {/* Circular Play CTA */}
          <TouchableOpacity style={styles.playButton} onPress={onPlay} activeOpacity={0.8}>
            <Ionicons name="play" size={16} color={colors.white} style={{ marginLeft: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#242424',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  coverBox: {
    width: 100,
    height: 125,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  decorCircleLarge: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  decorCircleSmall: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  genrePill: {
    position: 'absolute',
    bottom: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: radius.full,
  },
  genreText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  details: {
    flex: 1,
    paddingLeft: 14,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    flex: 1,
    marginRight: 6,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E7',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: radius.sm,
  },
  ratingText: {
    color: '#D97706',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 3,
  },
  author: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
    marginLeft: 4,
  },
  playButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});
