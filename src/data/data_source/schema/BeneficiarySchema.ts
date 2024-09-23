import Realm from 'realm';

export default class BeneficiarySchema extends Realm.Object<BeneficiarySchema> {
    _id!: string;
    firstName!: string;
    lastName!: string;
    iban!: string;

    static schema: Realm.ObjectSchema = {
        name: 'BeneficiarySchema',
        properties: {
            _id: 'string',
            firstName: 'string',
            lastName: 'string',
            iban: 'string',
            transactions: 'TransactionSchema[]',
        },
    };
}
