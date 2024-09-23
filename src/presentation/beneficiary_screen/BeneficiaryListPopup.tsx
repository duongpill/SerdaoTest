import React, { memo } from 'react';
import { View, Button, FlatList, Modal } from 'react-native';
import { Beneficiary } from '../../domain/model/Beneficiary';
import BeneficiaryItem from './BeneficiaryItem';
import styles from '../../../styles/HomeScreenStyles';

interface Props {
    isOpen: boolean;
    beneficiaries?: Beneficiary[];
    closeModal: () => void;
    handleSelect: (beneficiary: Beneficiary) => void;
}

const BeneficiaryListPopup = ({isOpen, beneficiaries, closeModal, handleSelect}: Props) => {
    return (
      <Modal
        visible={isOpen}
        animationType="slide"
        transparent={true}>
          <View style={styles.modalContainer}>
            <FlatList
              data={beneficiaries}
              keyExtractor={(item) => item.id ? item.id.toString() : '' }
              renderItem={({item}) => (
                <BeneficiaryItem handleSelect={handleSelect} beneficiary={item} />
              )}
            />
            <Button
              title="Close"
              onPress={closeModal}
            />
          </View>
      </Modal>
    );
};

export default memo(BeneficiaryListPopup);
