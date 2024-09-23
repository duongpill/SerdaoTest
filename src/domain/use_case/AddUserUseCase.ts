import { User } from '../model/User';
import { UserRepository } from '../repository/UserRepository';

export class AddUserUseCase {

    private userRepository?: UserRepository;

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository;
    }

    async invoke(user: User){
        return this.userRepository?.add(user);
    }
}
