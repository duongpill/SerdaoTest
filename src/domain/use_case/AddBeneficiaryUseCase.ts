import { BeneficiaryRepository } from '../repository/BeneficiaryRepository';
import { Beneficiary } from '../model/Beneficiary';

export class AddBeneficiaryUseCase {

    private beneficiaryRepository?: BeneficiaryRepository;

    constructor(beneficiaryRepository?: BeneficiaryRepository) {
        this.beneficiaryRepository = beneficiaryRepository;
    }

    async invoke(beneficiary: Beneficiary){
        return this.beneficiaryRepository?.add(beneficiary);
    }
}
