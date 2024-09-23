import { Transaction } from '../model/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';

export class AddTransactionUseCase {

    private transactionRepository?: TransactionRepository;

    constructor(transactionRepository?: TransactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    async invoke(transaction: Transaction){
        return this.transactionRepository?.add(transaction);
    }
}
