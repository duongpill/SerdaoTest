import React, {useEffect, useRef, useState} from 'react';
import {View, Button, TextInput, Text} from 'react-native';
import { useApplicationContext } from '../ApplicationContext';
import styles from '../../../styles/TransactionScreenStyles';
import { Dependencies } from '../../di/Dependencies';
import { Transaction } from '../../domain/model/Transaction';
import TextInputCustom from '../components/TextInputCustom';
import 'react-native-get-random-values';
import { BSON } from 'realm';
import { AmountValidationType } from '../../domain/use_case/validation/AmountValidationUseCase';
import { Beneficiary } from '../../domain/model/Beneficiary';

const TransactionScreen = ({ navigation, route }: any) => {

  const { beneficiaryId } = route.params;

  const textInputAmountRef = useRef<TextInput>(null);
  const [amount, setAmount] = useState('');
  const [beneficiary, setBeneficiary] = useState<Beneficiary | undefined | null>();
  const [amountError, setAmountError] = useState('');
  const { addTransaction, balance } = useApplicationContext();

  useEffect(() => {
    getBeneficiary()
  }, [beneficiaryId])

  const getBeneficiary = async () => {
    const result = await Dependencies.instance().getBeneficiaryUseCase(beneficiaryId);
    setBeneficiary(result)
  }

  const handleTransaction = () => {
    if (!validateTransaction()){
      return;
    }

    const uuid = new BSON.UUID();
    const transaction: Transaction = { id: uuid.toString(), amount: parseFloat(amount), beneficiaryId: beneficiaryId, date: new Date() };
    addTransaction && addTransaction(transaction);
    navigation.goBack();
  };

  const validateTransaction = () => {
    const checkAmount = Dependencies.instance().amountValidationUseCase(amount, balance ? balance : 0);
    switch (checkAmount) {
      case AmountValidationType.EMPTY: {
        setAmountError('Amount is not empty!');
        textInputAmountRef.current?.focus();
        return false;
      }
      case AmountValidationType.LARGER_THAN_BALANCE: {
        setAmountError('Balance ' + balance + ' is not enough for the amount');
        textInputAmountRef.current?.focus();
        return false;
      }
      default: {
        setAmountError('');
        break;
      }
    }
    return true;
  };

  return (
    <View style={styles.container}>
      {
        beneficiary && <View style={styles.beneficiaryContainer}>
          <Text style={styles.beneficiaryText}>{'Beneficiary: ' + beneficiary.firstName + ' ' + beneficiary.lastName}</Text>
          <Text style={styles.beneficiaryText}>{'IBAN: ' + beneficiary.iban}</Text>
        </View>
      }
      <TextInputCustom
        inputRef={textInputAmountRef}
        data={amount}
        setData={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
        error={amountError}
      />
      <Button title="Submit Transaction" onPress={handleTransaction} />
    </View>
  );
};

export default TransactionScreen;
