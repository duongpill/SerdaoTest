import Realm from 'realm';
import BeneficiarySchema from './BeneficiarySchema';

export default class TransactionSchema extends Realm.Object<TransactionSchema> {
  _id!: string;
  beneficiaryId!: string;
  amount!: number;
  date!: Date;

  static schema: Realm.ObjectSchema = {
      name: 'TransactionSchema',
      properties: {
        _id: 'string',
        beneficiaryId: 'string',
        amount: 'int',
        date: 'date',
      },
  };
}
