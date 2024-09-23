import { Text, View } from 'react-native';
import { Transaction } from '../../domain/model/Transaction';
import React, { memo, useEffect, useState } from 'react';
import styles from '../../../styles/TransactionItemStyles';
import moment from 'moment';
import { Beneficiary } from '../../domain/model/Beneficiary';
import { Dependencies } from '../../di/Dependencies';

const TransactionItem = ({ id, amount, beneficiaryId, date }: Transaction) => {

  const [beneficiary, setBeneficiary] = useState<Beneficiary | undefined | null>();

  useEffect(() => {
    getBeneficiary()
  }, [beneficiaryId])

  const getBeneficiary = async () => {
    const result = await Dependencies.instance().getBeneficiaryUseCase(beneficiaryId);
    setBeneficiary(result)
  }
  
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Transaction ID: {id.toString()}</Text>
      <Text style={styles.itemText}>Amount: ${amount?.toFixed(2)}</Text>
      {beneficiary && (
        <>
          <Text style={styles.itemText}>To: {beneficiary.firstName + beneficiary.lastName}</Text>
          <Text style={styles.itemText}>IBAN: {beneficiary.iban}</Text>
        </>
      )}
      <Text style={styles.itemText}>Date: {moment(date).format('YYYY/MM/DD HH:mm:ss')}</Text>
    </View>
  )};

  export default memo(TransactionItem);
