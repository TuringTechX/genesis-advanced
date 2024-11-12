import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { Button } from 'react-native-paper';

const WelcomeScreen: React.FC = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/particles-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Gradient Logo */}
      <LinearGradient
        colors={['#2A9D8F', '#264653']}
        style={styles.logoContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.logoText}>Genesis360</Text>
      </LinearGradient>

      {/* Leaf Animation */}
      <LottieView
        source={require('../../assets/animations/leaves.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Welcome Message */}
      <Text style={styles.welcomeMessage}>Welcome to a Sustainable Future</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Signup')}
          style={[styles.button, styles.outlinedButton]}
          labelStyle={styles.buttonLabel}
        >
          Create Account
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9F5F2',
  },
  logoContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  animation: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  welcomeMessage: {
    fontSize: 22,
    fontWeight: '600',
    color: '#264653',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  button: {
    width: 150,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  outlinedButton: {
    borderColor: '#2A9D8F',
    borderWidth: 2,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
