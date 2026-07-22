/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  } as const,
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  } as const,
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 70, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

export const LegacyColors = {
  primary: '#028894',
  primary_contrast: '#FFFFFF',
  secondary: '#EE5D0A',
  reject: "#E74A3B",
  error: '#E74A3B',
  text: '#181818',
  placeholder: '#888888',
  text_secondary: '#666666',
  icon: '#7D7D7D',
  borderInput: '#F0F0F0',
  input: "#F9F9F9",
  layout: '#FFFFFF',
  layout_light: '#F1F1F2',
  layout_secondary: '#E8E8E9',
  layout_tertiary: '#F8FAFC',
  layout_quaternary: '#E6EAED',
  white: '#FFFFFF',
  black: '#000000',
  border: '#CCCCCC',
  button_secondary: "#012C2F",
  box1: "#97B1CB",
  box2: "#60C486",
  box3: "#F0A424",
  box4: "#D4B0B1",
} as const;
