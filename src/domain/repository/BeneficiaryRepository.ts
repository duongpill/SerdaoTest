import { Beneficiary } from '../model/Beneficiary';

export interface BeneficiaryRepository {

    getAll(): Promise<Beneficiary[] | null>;

    get(id: string): Promise<Beneficiary | null>;

    add(transaction: Beneficiary): Promise<boolean | null>;

}
