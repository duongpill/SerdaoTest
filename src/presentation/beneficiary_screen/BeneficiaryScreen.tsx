import React, {useEffect, useRef, useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import { useApplicationContext } from '../ApplicationContext';
import styles from '../../../styles/TransactionScreenStyles';
import { Dependencies } from '../../di/Dependencies';
import { Beneficiary } from '../../domain/model/Beneficiary';
import TextInputCustom from '../components/TextInputCustom';
import 'react-native-get-random-values';
import { BSON } from 'realm';

const BeneficiaryScreen = ({ navigation }: any) => {
  const textInputFirstNameRef = useRef<TextInput>(null);
  const textInputLastNameRef = useRef<TextInput>(null);
  const textInputIBANRef = useRef<TextInput>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [iban, setIban] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [ibanError, setIBANError] = useState('');
  const { createBeneficiary } = useApplicationContext();

  useEffect(() => {
    setData()
  }, [])

  const setData = () => {
    setFirstName('Duong')
    setLastName('Nguyen')
    setIban('BE89199774651385')
  }

  const handleBeneficiary = () => {
    if (!validateBeneficiary()){
      return;
    }

    const uuid = new BSON.UUID();
    const beneficiary: Beneficiary = { id: uuid.toString(), firstName, lastName, iban };
    createBeneficiary && createBeneficiary(beneficiary);
    navigation.goBack();
  };

  const validateBeneficiary = () => {
    if (firstName === ''){
      setFirstNameError('First Name is not empty!');
      textInputFirstNameRef.current?.focus();
      return false;
    }
    setFirstNameError('');

    if (lastName === ''){
      setLastNameError('Last Name is not empty!');
      textInputLastNameRef.current?.focus();
      return false;
    }
    setLastNameError('');

    const checkIBAN = Dependencies.instance().ibanValidationUseCase(iban);
    if (!checkIBAN) {
      setIBANError('IBAN is invalid!');
      textInputIBANRef.current?.focus();
      return false;
    }
    setIBANError('');
    return true;
  };

  return (
    <View style={styles.container}>
      <TextInputCustom
        inputRef={textInputFirstNameRef}
        data={firstName}
        setData={setFirstName}
        placeholder="Enter the First Name"
        error={firstNameError}
      />
      <TextInputCustom
        inputRef={textInputLastNameRef}
        data={lastName}
        setData={setLastName}
        placeholder="Enter the Last Name"
        error={lastNameError}
      />
      <TextInputCustom
        inputRef={textInputIBANRef}
        data={iban}
        setData={setIban}
        placeholder="Recipient IBAN"
        error={ibanError}
      />
      <Button title="Submit Beneficiary" onPress={handleBeneficiary} />
    </View>
  );
};

export default BeneficiaryScreen;
