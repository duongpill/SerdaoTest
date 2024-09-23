import { BeneficiaryRepository } from '../repository/BeneficiaryRepository';

export class GetBeneficiariesUseCase {
    private beneficiaryRepository?: BeneficiaryRepository;

    constructor(beneficiaryRepository?: BeneficiaryRepository) {
        this.beneficiaryRepository = beneficiaryRepository;
    }

    async invoke(){
        return this.beneficiaryRepository?.getAll();
    }
}
