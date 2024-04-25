import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { nameValidator } from '../core/utils';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const TeamRegistrationScreen = ({ navigation }: Props) => {

    const [teamName, setTemaName] = useState({ value: '', error: '' });
    const [nativeName, setNativeName] = useState({ value: '', error: '' });
    const [captionName, setCaptionName] = useState({ value: '', error: '' });
    const [contactNo, setContactNo] = useState({ value: '', error: '' });
    const [voiceCaptionName, setVoiceCaptionName] = useState({ value: '', error: '' });
    const [additionalContactNo, setAdditionalContactNo] = useState({ value: '', error: '' });

  const _onRegisterTeam = () => {
    const teamError = nameValidator(teamName.value);
    const nativeNameError = nameValidator(nativeName.value);
    const captionNameError = nameValidator(captionName.value);
    const contactNoError = nameValidator(contactNo.value);
    const voiceCaptionNameError = nameValidator(voiceCaptionName.value);
    const additionalContactNoError = nameValidator(additionalContactNo.value);

    if (teamError || nativeNameError || captionNameError || contactNoError || voiceCaptionNameError ||additionalContactNoError ) {
        setTemaName({ ...teamName, error: teamError });
        setNativeName({ ...nativeName, error: nativeNameError });
        setCaptionName({ ...captionName, error: captionNameError });
        setContactNo({ ...contactNo, error: contactNoError });
        setVoiceCaptionName({ ...voiceCaptionName, error: voiceCaptionNameError });
        setAdditionalContactNo({ ...additionalContactNo, error: additionalContactNoError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Team Registration.</Header>

      <TextInput
        label="Team Name"
        returnKeyType="next"
        value={teamName.value}
        onChangeText={text => setTemaName({ value: text, error: '' })}
        error={!!teamName.error}
        errorText={teamName.error}
        autoCapitalize="none"
        autoComplete="off"
        textContentType="name"
        keyboardType="default"
      />

      <TextInput
        label="Native Name"
        returnKeyType="done"
        value={nativeName.value}
        onChangeText={text => setNativeName({ value: text, error: '' })}
        error={!!nativeName.error}
        errorText={nativeName.error}
        autoCapitalize="none"
        autoComplete="off"
        textContentType="name"
        keyboardType="default"
      />

        <TextInput
        label="Caption Name"
        returnKeyType="next"
        value={captionName.value}
        onChangeText={text => setCaptionName({ value: text, error: '' })}
        error={!!captionName.error}
        errorText={captionName.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="name"
        keyboardType="default"
      />

      <TextInput
        label="Contact NO"
        returnKeyType="done"
        value={contactNo.value}
        onChangeText={text => setContactNo({ value: text, error: '' })}
        error={!!contactNo.error}
        errorText={contactNo.error}
        autoCapitalize="none"
        autoComplete="off"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />

      
<TextInput
        label="VoiceCaption Name"
        returnKeyType="next"
        value={voiceCaptionName.value}
        onChangeText={text => setVoiceCaptionName({ value: text, error: '' })}
        error={!!voiceCaptionName.error}
        errorText={voiceCaptionName.error}
        autoCapitalize="none"
        autoComplete="off"
        textContentType="name"
        keyboardType="default"
      />

      <TextInput
        label="Contact NO"
        returnKeyType="done"
        value={additionalContactNo.value}
        onChangeText={text => setAdditionalContactNo({ value: text, error: '' })}
        error={!!additionalContactNo.error}
        errorText={additionalContactNo.error}
        autoCapitalize="none"
        autoComplete="off"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />

      <Button mode="contained" onPress={_onRegisterTeam}>
        Register
      </Button>
      
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(TeamRegistrationScreen);
