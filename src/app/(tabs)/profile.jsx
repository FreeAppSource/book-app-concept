import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../../theme';

export default function ProfileTab() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Audio Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Profile Card */}
        <View style={[styles.userCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
            <Ionicons name="person" size={36} color={colors.white} />
          </View>
          <Text style={[styles.userName, { color: theme.text }]}>Sarah Jenkins</Text>
          <Text style={[styles.userSub, { color: theme.subText }]}>Premium Listener</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={[styles.statVal, { color: colors.primary }]}>48h</Text>
              <Text style={styles.statLabel}>Listened</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
            <View style={styles.statBox}>
              <Text style={[styles.statVal, { color: colors.coral }]}>14</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
            <View style={styles.statBox}>
              <Text style={[styles.statVal, { color: '#D97706' }]}>7d</Text>
              <Text style={styles.statLabel}>Streak</Text>
            </View>
          </View>
        </View>

        {/* Preferences */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>Settings</Text>

        <View style={[styles.menuList, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
            <View style={styles.menuLeft}>
              <Ionicons name={isDark ? 'sunny-outline' : 'moon-outline'} size={20} color={colors.primary} style={{ marginRight: 12 }} />
              <Text style={[styles.menuTitle, { color: theme.text }]}>Dark Mode</Text>
            </View>
            <Text style={{ color: theme.subText }}>{isDark ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <View style={[styles.itemDivider, { backgroundColor: theme.border }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Ionicons name="volume-high-outline" size={20} color={colors.coral} style={{ marginRight: 12 }} />
              <Text style={[styles.menuTitle, { color: theme.text }]}>Audio Streaming Quality</Text>
            </View>
            <Text style={{ color: theme.subText }}>Lossless</Text>
          </TouchableOpacity>

          <View style={[styles.itemDivider, { backgroundColor: theme.border }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Ionicons name="download-outline" size={20} color={colors.primary} style={{ marginRight: 12 }} />
              <Text style={[styles.menuTitle, { color: theme.text }]}>Download Over Wi-Fi Only</Text>
            </View>
            <Ionicons name="checkmark-circle" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 22, paddingTop: 16, paddingBottom: 12 },
  title: { fontSize: 26, fontWeight: '900' },
  scroll: { paddingHorizontal: 22, paddingBottom: 32 },
  userCard: { alignItems: 'center', padding: 22, borderRadius: radius.lg, borderWidth: 1, marginVertical: 14 },
  avatar: { width: 72, height: 72, borderRadius: 36, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  userName: { fontSize: 18, fontWeight: '800', marginBottom: 2 },
  userSub: { fontSize: 13, marginBottom: 16 },
  statsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  statBox: { alignItems: 'center' },
  statVal: { fontSize: 20, fontWeight: '900', marginBottom: 2 },
  statLabel: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  divider: { width: 1, height: 28 },
  sectionHeading: { fontSize: 16, fontWeight: '800', marginVertical: 12 },
  menuList: { borderRadius: radius.lg, borderWidth: 1, overflow: 'hidden' },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16 },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuTitle: { fontSize: 15, fontWeight: '600' },
  itemDivider: { height: 1 },
});
