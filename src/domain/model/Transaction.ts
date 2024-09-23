import { Beneficiary } from './Beneficiary';

export type Transaction = {
    id: string;
    amount: number;
    beneficiaryId: string;
    date: Date;
}
