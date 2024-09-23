import { TransactionRepository } from '../repository/TransactionRepository';

export class GetTransactionsUseCase {
    private transactionRepository?: TransactionRepository;

    constructor(transactionRepository?: TransactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    async invoke(){
        return this.transactionRepository?.getAll();
    }
}