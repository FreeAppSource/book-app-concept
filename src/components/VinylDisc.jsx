import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';

const { width } = Dimensions.get('window');
const DISC_SIZE = width * 0.68;

export default function VinylDisc({ gradient = ['#FD6E8D', '#FF9B82'], isPlaying = true }) {
  return (
    <View style={styles.container}>
      {/* Outer vinyl grooves */}
      <View style={styles.outerVinyl}>
        {/* Subtle groove ring 1 */}
        <View style={styles.grooveOne}>
          {/* Subtle groove ring 2 */}
          <View style={styles.grooveTwo}>
            {/* Center Album Art Circle */}
            <LinearGradient
              colors={gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.albumCenter}
            >
              <View style={styles.centerSpindle}>
                <View style={styles.spindleHole} />
              </View>

              <Ionicons
                name="headset"
                size={34}
                color="rgba(255, 255, 255, 0.85)"
              />
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  outerVinyl: {
    width: DISC_SIZE,
    height: DISC_SIZE,
    borderRadius: DISC_SIZE / 2,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  grooveOne: {
    width: DISC_SIZE - 28,
    height: DISC_SIZE - 28,
    borderRadius: (DISC_SIZE - 28) / 2,
    borderWidth: 1.5,
    borderColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grooveTwo: {
    width: DISC_SIZE - 56,
    height: DISC_SIZE - 56,
    borderRadius: (DISC_SIZE - 56) / 2,
    borderWidth: 1.5,
    borderColor: '#2F2F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumCenter: {
    width: DISC_SIZE * 0.58,
    height: DISC_SIZE * 0.58,
    borderRadius: (DISC_SIZE * 0.58) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#FD6E8D',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  centerSpindle: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  spindleHole: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#242424',
  },
});
