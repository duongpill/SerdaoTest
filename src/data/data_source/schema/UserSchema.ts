import Realm from 'realm';

export default class UserSchema extends Realm.Object<UserSchema> {
    balance!: number;

    static schema: Realm.ObjectSchema = {
        name: 'UserSchema',
        properties: {
            balance: 'int',
        },
    };
}
