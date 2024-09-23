import { UserRepository } from '../repository/UserRepository';

export class GetUsersUseCase {
    private userRepository?: UserRepository;

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository;
    }

    async invoke(){
        return this.userRepository?.getUser();
    }
}