import { User } from '../model/User';
import { UserRepository } from '../repository/UserRepository';

export class UpdateUserUseCase {

    private userRepository?: UserRepository;

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository;
    }

    async invoke(balance: number){
        return this.userRepository?.update(balance);
    }
}
