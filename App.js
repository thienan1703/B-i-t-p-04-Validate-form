import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    if (text.length === 10) {
      setErrorMessage('');
    } else {
      setErrorMessage('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    }
  };

  const handleContinue = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Thông báo', 'Số điện thoại không tồn tại');
    } else {
      Alert.alert('Thông báo', 'Hoàn thành đăng nhập');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nhập số điện thoại</Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});