import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useApplicationContext } from '../ApplicationContext';
import styles from '../../../styles/HomeScreenStyles';
import { Beneficiary } from '../../domain/model/Beneficiary';
import TransactionItem from '../transaction_screen/TransactionItem';
import BeneficiaryListPopup from '../beneficiary_screen/BeneficiaryListPopup';

const HomeScreen = ({ navigation }: any) => {

  const { beneficiaries, transactions, balance } = useApplicationContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary>();
  const [error, setError] = useState('');
  const [beneficiaryPopupError, setBeneficiaryPopupError] = useState('');

  const moveToBeneficiary = () => {
    setBeneficiaryPopupError('');
    navigation.navigate('Beneficiary');
  };

  const moveToTransaction = () => {
    if (!selectedBeneficiary) {
      setError('Please select the beneficiary!');
      return;
    }
    setError('');
    navigation.navigate('Transaction', {beneficiaryId: selectedBeneficiary.id});
  };

  const openTheBeneficiaryPopup = () => {
    if (!beneficiaries || beneficiaries.length <= 0){
      setBeneficiaryPopupError("Don't have any beneficiaries. \nPlease add the beneficiary first!");
      return;
    }
    setIsOpen(true);
  };

  const handleSelect = (item: Beneficiary) => {
    setSelectedBeneficiary(item);
    setError('');
    setBeneficiaryPopupError('');
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Current Balance: ${balance?.toFixed(2)}</Text>
      <Button
        title="Add Beneficiary"
        onPress={moveToBeneficiary}
      />
      <View style={styles.beneficiaryContainer} >
        <Text>{'Beneficiary: '}</Text>
        <TouchableOpacity style={styles.beneficiaryBox} onPress={openTheBeneficiaryPopup}>
          <Text style={styles.beneficiaryText}>
            {selectedBeneficiary ? (selectedBeneficiary.firstName + ' ' + selectedBeneficiary.lastName) : 'Select an item'}
          </Text>
        </TouchableOpacity>
      </View>
      { beneficiaryPopupError && <Text style={styles.error}>{beneficiaryPopupError}</Text>}
      <BeneficiaryListPopup
        isOpen={isOpen}
        beneficiaries={beneficiaries}
        closeModal={closeModal}
        handleSelect={handleSelect} />
      <Button
        title="Add Transaction"
        onPress={moveToTransaction}
      />
      { error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id ? item.id.toString() : '' }
        renderItem={({item}) => (
          <TransactionItem {...item} />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
