import { Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import styles from '../../../styles/TransactionItemStyles';
import { Beneficiary } from '../../domain/model/Beneficiary';

interface Props {
  handleSelect: (item: Beneficiary) => void;
  beneficiary: Beneficiary;
}

const BeneficiaryItem = ({ handleSelect, beneficiary }: Props) => (
  <TouchableOpacity style={styles.item} onPress={() => handleSelect(beneficiary)}>
    <Text style={styles.itemText}>Full Name: {beneficiary.firstName + ' ' + beneficiary.lastName}</Text>
    <Text style={styles.itemText}>IBAN: {beneficiary.iban}</Text>
  </TouchableOpacity>
);

export default memo(BeneficiaryItem);
