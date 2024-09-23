import { TransactionRepository } from '../../domain/repository/TransactionRepository';
import Realm from 'realm';
import { ToTransactionSchema, ToTransactionModel } from '../mapper/Mapper';
import { Transaction } from '../../domain/model/Transaction';
import TransactionSchema from '../data_source/schema/TransactionSchema';

export class TransactionRepositoryImpl implements TransactionRepository {

    private realm: Realm;

    constructor(realm: Realm) {
        this.realm = realm;
    }

    async getAll() {
        const objects = this.realm.objects(TransactionSchema.name).sorted('date', true);
        const transactions: TransactionSchema[] = JSON.parse(JSON.stringify(objects));
        const newTransactions = transactions.map(item => ToTransactionModel(item));
        return Promise.resolve(newTransactions);
    }

    async add(transaction: Transaction) {
        this.realm.write(() => {
            const toSchema = ToTransactionSchema(transaction)
            console.log("toSchema: " + JSON.stringify(toSchema))
            const result = this.realm.create(TransactionSchema.name, ToTransactionSchema(transaction));
            return result != null;
        });
        return false;
    }

};