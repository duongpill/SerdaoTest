import { BeneficiaryRepository } from '../repository/BeneficiaryRepository';

export class GetBeneficiaryUseCase {
    private beneficiaryRepository?: BeneficiaryRepository;

    constructor(beneficiaryRepository?: BeneficiaryRepository) {
        this.beneficiaryRepository = beneficiaryRepository;
    }

    async invoke(id: string){
        return this.beneficiaryRepository?.get(id);
    }
}
