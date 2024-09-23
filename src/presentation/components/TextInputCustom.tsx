import React, { memo } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import styles from '../../../styles/TextInputComponentStyles';

interface Props {
  inputRef: any;
  placeholder: string;
  data: string;
  setData: (data: string) => void;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
}

const TextInputCustom = ({ inputRef, placeholder, data, setData, keyboardType, error }: Props) => {

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        onChangeText={setData}
        value={data}
        keyboardType={keyboardType ? keyboardType : 'default'}
        placeholder={placeholder}
        placeholderTextColor="#999"
        blurOnSubmit={false}
      />
      {
        error && <Text style={styles.error}>{error}</Text>
      }
    </View>
  );
};

export default memo(TextInputCustom);
