import { Transaction } from '../model/Transaction';

export interface TransactionRepository {

    getAll(): Promise<Transaction[] | null>;

    add(transaction: Transaction): Promise<boolean | null>;

};