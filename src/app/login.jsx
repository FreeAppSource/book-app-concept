import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { appInfo } from '../data';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 600);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header showBack showAction={false} />

        <View style={styles.heading}>
          <Text style={[styles.title, { color: theme.text }]}>Sign In</Text>
          <Text style={[styles.subtitle, { color: theme.subText }]}>
            Welcome back to {appInfo.title}
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <InputField
            label="Email or Username"
            value={email}
            onChangeText={setEmail}
            placeholder="user@example.com"
            keyboardType="email-address"
            icon="mail-outline"
          />

          <InputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••••••"
            secureTextEntry
            icon="lock-closed-outline"
          />

          <Button
            title="Sign In"
            onPress={handleLogin}
            loading={loading}
            style={styles.submitBtn}
          />
        </View>

        <View style={styles.footer}>
          <Text style={{ color: theme.subText, fontSize: 14 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
            <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 14 }}>
              Continue as Guest
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingHorizontal: 24, paddingBottom: 40 },
  heading: { marginTop: 20, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 6 },
  subtitle: { fontSize: 15 },
  card: { padding: 22, borderRadius: radius.lg, borderWidth: 1 },
  submitBtn: { marginTop: 10 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 28 },
});
