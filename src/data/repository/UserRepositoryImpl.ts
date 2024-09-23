import Realm from 'realm';
import { ToUserModel, ToUserSchema } from '../mapper/Mapper';
import { UserRepository } from '../../domain/repository/UserRepository';
import { User } from '../../domain/model/User';
import UserSchema from '../data_source/schema/UserSchema';

export class UserRepositoryImpl implements UserRepository {

    private realm: Realm;

    constructor(realm: Realm) {
        this.realm = realm;
    }

    async getUser() {
        const objects = this.realm.objects(UserSchema.name);
        const users: UserSchema[] = JSON.parse(JSON.stringify(objects));
        const newUsers = users.map(item => ToUserModel(item));
        if (newUsers){
            return Promise.resolve(newUsers[0]);
        }
        return null;
    }

    async add(user: User) {
        this.realm.write(() => {
            const result = this.realm.create(UserSchema.name, ToUserSchema(user));
            return result != null;
        });
        return false;
    }

    async update(balance: number) {
        const objects = this.realm.objects(UserSchema.name);
        this.realm.write(() => {
            if (objects){
                objects[0].balance = balance;
            }
            return true;
        });
        return false;
    }

}
