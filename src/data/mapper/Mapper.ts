import { Beneficiary } from '../../domain/model/Beneficiary';
import { Transaction } from '../../domain/model/Transaction';
import { User } from '../../domain/model/User';
import BeneficiarySchema from '../data_source/schema/BeneficiarySchema';
import TransactionSchema from '../data_source/schema/TransactionSchema';
import UserSchema from '../data_source/schema/UserSchema';

export function ToUserModel(item: UserSchema): User{
    return {
        balance: item.balance,
    };
}

export function ToBeneficiaryModel(item: BeneficiarySchema): Beneficiary{
    return {
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        iban: item.iban,
    };
}

export function ToTransactionModel(item: TransactionSchema): Transaction{
    return {
        id: item._id,
        amount: item.amount,
        beneficiaryId: item.beneficiaryId,
        date: item.date,
    };
}

export function ToUserSchema(item: User){
    return {
        balance: item?.balance
    };
}

export function ToTransactionSchema(item: Transaction){
    return {
        _id: item?.id,
        amount: item?.amount,
        beneficiaryId: item?.beneficiaryId,
        date: item?.date,
    };
}

export function ToBeneficiarySchema(item?: Beneficiary){
    return {
        _id: item?.id,
        firstName: item?.firstName,
        lastName: item?.lastName,
        iban: item?.iban
    };
}
