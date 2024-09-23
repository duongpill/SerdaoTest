import React, { createContext, useState, useContext, useEffect } from 'react';
import { Transaction } from '../domain/model/Transaction';
import { useRealm } from '@realm/react';
import { Dependencies } from '../di/Dependencies';
import { Beneficiary } from '../domain/model/Beneficiary';

interface Props {
  beneficiaries?: Beneficiary[];
  transactions?: Transaction[];
  addTransaction?: (transaction: Transaction) => void;
  createBeneficiary?: (beneficiary: Beneficiary) => void;
  balance?: number;
}

const ApplicationContext = createContext<Props>({});

export const useApplicationContext = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }: any) => {

  const realm = useRealm();
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const dependencies = Dependencies.instance();

  useEffect(() => {
    dependencies.initSingletonType(realm);
  }, [dependencies, realm]);

  useEffect(() => {
    loadData();
  }, []);

  /**
   * Set the default balance value
   * Load data from DB
   */
  const loadData = async() => {
    let user = await dependencies.getUsersUseCase();
    if (!user){
      await dependencies.addUserUseCase({ balance: 10000 });
      user = await dependencies.getUsersUseCase();
    }
    if (user){
      setBalance(user.balance);
      const newBeneficiaries = await dependencies.getBeneficiariesUseCase();
      setBeneficiaries(newBeneficiaries ? newBeneficiaries : []);
      const newTransactions = await dependencies.getTransactionsUseCase();
      setTransactions(newTransactions ? newTransactions : []);
    }
  };

  const createBeneficiary = async (beneficiary: Beneficiary) => {
    await dependencies.addBeneficiaryUseCase(beneficiary);
    setBeneficiaries((prevBeneficiaries) => [...prevBeneficiaries, beneficiary]);
  };

  const addTransaction = async (transaction: Transaction) => {
    await dependencies.addTransactionUseCase(transaction);
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);

    const newBalance = balance - transaction.amount;
    await dependencies.updateUserUseCase(newBalance);
    setBalance(newBalance);
  };

  return (
    <ApplicationContext.Provider value={{ beneficiaries, transactions, addTransaction, createBeneficiary, balance }}>
      {children}
    </ApplicationContext.Provider>
  );
};
