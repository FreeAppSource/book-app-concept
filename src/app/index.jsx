import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';
import { appInfo } from '../data';
import Button from '../components/Button';

export default function WelcomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        <View style={styles.heroBox}>
          <View style={[styles.outerCircle, { backgroundColor: colors.primarySoft }]}>
            <View style={[styles.innerCircle, { backgroundColor: colors.primary }]}>
              <Ionicons name="sparkles" size={54} color={colors.white} />
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.brand, { color: colors.primary }]}>{appInfo.title}</Text>
          <Text style={[styles.tagline, { color: theme.text }]}>{appInfo.tagline}</Text>
          <Text style={[styles.desc, { color: theme.subText }]}>
            Designed with high fidelity from source artboards, modern architecture, and native responsiveness.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Explore App"
            onPress={() => router.replace('/(tabs)')}
            style={styles.mainBtn}
          />
          <Button
            title="Sign In with Account"
            variant="outline"
            onPress={() => router.push('/login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    paddingVertical: 32,
  },
  heroBox: {
    height: '42%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
  brand: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    gap: 12,
  },
  mainBtn: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
});
