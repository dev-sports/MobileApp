import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { checkResponse, emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import Paragraph from '../components/Paragraph';
import Background from '../core/background';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


type Props = {
  navigation: Navigation;
};



const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);

  const _onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);

    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }
    //console.log("Calling here");
    navigation.navigate('Dashboard');
    //handleLogin()
  };

  const handleLogin = async () => {
    console.log("Calling this");
    setLoading(true);
    try {
        const response = await fetch('http://192.168.18.92:8080/api/sports/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email.value, password: password.value }),
        });

        checkResponse(response);  

        const json = await response.json();
        if (json.token) {
            //setAuthToken(json.token);
            navigation.navigate('Dashboard');
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        setPassword({ ...password, error: error.message });
    } finally {
        setLoading(false);
    }
};


  return (
    <Background source={require('../assets/login.jpg')}>
      <ScrollView contentContainerStyle={styles.centerContent}>
        <BackButton goBack={() => navigation.navigate('HomeScreen')} />
        
        <View >
          <Text >Welcome</Text>
          <Text >Find the nearby Sports activities and Friends,
          In your location</Text>
        </View>

        <TextInput style={styles.textInput}
          placeholder="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          accessibilityLabel="Enter your email address"
        />

        <TextInput style={styles.textInput}
          placeholder="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={_onLoginPressed}>
          Login
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  centerContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  headerContainer: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  forgotPassword: {
    width: wp('100%'),
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: "red",
  },
  image: {
    width: wp('100%'),
    height: hp('30%'), // Adjust based on your content
  },
  textInput: {

    marginLeft:20,
    marginRight:20,
    borderRadius:40,
    marginBottom: 12, // Reduce the space between text inputs
    borderColor: '#FFA500',  // Set the border color
  }
});

export default memo(LoginScreen);
