import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import Text from '@/components/atoms/Text';
import FormInput from '@/components/molecules/FormInput';
import ElementButton from '@/components/atoms/ElementButton';
import { LegacyColors as Colors } from '@/constants/Colors';
import { metrics as Metrics } from '@/utils/metrics';
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";

export function LoginScreen() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Fake login
    dispatch(loginSuccess({ token: 'dummy-token', user: { id: '1', name: 'dummy' } as any }));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}><ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>BitexcoPower</Text>
        <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>
      </View>

      <View style={styles.form}>
        <FormInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
          iconName="person"
          containerStyle={styles.inputSpacing}
        />

        <FormInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          iconName="lock"
          secureTextEntry
          containerStyle={styles.inputSpacing}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <ElementButton
          label="Đăng Nhập"
          onPress={handleLogin}

          style={styles.loginBtn}
        />
      </View>
    </ScrollView></KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.spacing.medium,
  },
  header: {
    alignItems: 'center',
    marginBottom: Metrics.spacing.large,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: Metrics.spacing.medium,
  },
  title: {
    fontSize: 28,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text_secondary,
    marginTop: 4,
  },
  form: {
    width: '100%',
  },
  inputSpacing: {
    marginBottom: Metrics.spacing.medium,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: Metrics.spacing.medium,
  },
  forgotText: {
    color: Colors.primary,
    fontSize: 14,
  },
  loginBtn: {
    marginTop: Metrics.spacing.medium,
  }
});
