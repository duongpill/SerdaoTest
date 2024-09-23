import { TransactionRepositoryImpl } from '../data/repository/TransactionRepositoryImpl';
import { Transaction } from '../domain/model/Transaction';
import { TransactionRepository } from '../domain/repository/TransactionRepository';
import { AddBeneficiaryUseCase } from '../domain/use_case/AddBeneficiaryUseCase';
import { AddTransactionUseCase } from '../domain/use_case/AddTransactionUseCase';
import { GetTransactionsUseCase } from '../domain/use_case/GetTransactionsUseCase';
import { GetUsersUseCase } from '../domain/use_case/GetUserUseCase';
import { AmountValidationUseCase } from '../domain/use_case/validation/AmountValidationUseCase';
import {IBANValidationUseCase} from '../domain/use_case/validation/IBANValidationUseCase';
import Realm from 'realm';
import { Beneficiary } from '../domain/model/Beneficiary';
import { BeneficiaryRepository } from '../domain/repository/BeneficiaryRepository';
import { UserRepository } from '../domain/repository/UserRepository';
import { UserRepositoryImpl } from '../data/repository/UserRepositoryImpl';
import { BeneficiaryRepositoryImpl } from '../data/repository/BeneficiaryRepositoryImpl';
import { AddUserUseCase } from '../domain/use_case/AddUserUseCase';
import { User } from '../domain/model/User';
import { GetBeneficiariesUseCase } from '../domain/use_case/GetBeneficiariesUseCase';
import { UpdateUserUseCase } from '../domain/use_case/UpdateUserUseCase';
import { GetBeneficiaryUseCase } from '../domain/use_case/GetBeneficiaryUseCase';

/* eslint-disable prettier/prettier */
export class Dependencies {
    static #instance: Dependencies;

    private _userRepository?: UserRepository;
    private _transactionRepository?: TransactionRepository;
    private _beneficiaryRepository?: BeneficiaryRepository;
    private _getUsersUseCase?: GetUsersUseCase;
    private _addUserUseCase?: AddUserUseCase;
    private _updateUserUseCase?: UpdateUserUseCase;
    private _addTransactionUseCase?: AddTransactionUseCase;
    private _getTransactionsUseCase?: GetTransactionsUseCase;
    private _addBeneficiaryUseCase?: AddBeneficiaryUseCase;
    private _getBeneficiariesUseCase?: GetBeneficiariesUseCase;
    private _getBeneficiaryUseCase?: GetBeneficiaryUseCase;
    private _ibanValidationUseCase?: IBANValidationUseCase;
    private _amountValidationUseCase?: AmountValidationUseCase;

    private constructor() {}

    public static instance(): Dependencies {
        if (!Dependencies.#instance) {
            Dependencies.#instance = new Dependencies();
        }
        return Dependencies.#instance;
    }

    initSingletonType(realm: Realm) {
        if (!this._userRepository){
            this._userRepository = new UserRepositoryImpl(realm);
        }
        if (!this._transactionRepository){
            this._transactionRepository = new TransactionRepositoryImpl(realm);
        }
        if (!this._beneficiaryRepository){
            this._beneficiaryRepository = new BeneficiaryRepositoryImpl(realm);
        }
    }

    ibanValidationUseCase(input: string) {
        this._ibanValidationUseCase = new IBANValidationUseCase();
        return this._ibanValidationUseCase.invoke(input);
    }

    amountValidationUseCase(input: string, balance: number) {
        this._amountValidationUseCase = new AmountValidationUseCase();
        return this._amountValidationUseCase.invoke(input, balance);
    }

    async getUsersUseCase() {
        this._getUsersUseCase = new GetUsersUseCase(this._userRepository);
        return this._getUsersUseCase.invoke();
    }

    async addUserUseCase(user: User) {
        this._addUserUseCase = new AddUserUseCase(this._userRepository);
        return this._addUserUseCase.invoke(user);
    }

    async updateUserUseCase(balance: number) {
        this._updateUserUseCase = new UpdateUserUseCase(this._userRepository);
        return this._updateUserUseCase.invoke(balance);
    }

    async addTransactionUseCase(transaction: Transaction) {
        this._addTransactionUseCase = new AddTransactionUseCase(this._transactionRepository);
        return this._addTransactionUseCase.invoke(transaction);
    }

    async addBeneficiaryUseCase(beneficiary: Beneficiary) {
        this._addBeneficiaryUseCase = new AddBeneficiaryUseCase(this._beneficiaryRepository);
        return this._addBeneficiaryUseCase.invoke(beneficiary);
    }

    async getBeneficiariesUseCase() {
        this._getBeneficiariesUseCase = new GetBeneficiariesUseCase(this._beneficiaryRepository);
        return this._getBeneficiariesUseCase.invoke();
    }

    async getBeneficiaryUseCase(id: string) {
        this._getBeneficiaryUseCase = new GetBeneficiaryUseCase(this._beneficiaryRepository);
        return this._getBeneficiaryUseCase.invoke(id);
    }

    async getTransactionsUseCase() {
        this._getTransactionsUseCase = new GetTransactionsUseCase(this._transactionRepository);
        return this._getTransactionsUseCase.invoke();
    }
}
