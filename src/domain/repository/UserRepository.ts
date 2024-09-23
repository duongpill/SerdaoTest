import { User } from '../model/User';

export interface UserRepository {

    getUser(): Promise<User | null>;

    add(user: User): Promise<boolean | null>;

    update(balance: number): Promise<boolean | null>;
}
