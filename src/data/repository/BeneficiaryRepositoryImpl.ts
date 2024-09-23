import { BeneficiaryRepository } from '../../domain/repository/BeneficiaryRepository';
import Realm from 'realm';
import { ToBeneficiarySchema, ToBeneficiaryModel } from '../mapper/Mapper';
import { Beneficiary } from '../../domain/model/Beneficiary';
import BeneficiarySchema from '../data_source/schema/BeneficiarySchema';

export class BeneficiaryRepositoryImpl implements BeneficiaryRepository {

    private realm: Realm;

    constructor(realm: Realm) {
        this.realm = realm;
    }

    async getAll() {
        const objects = this.realm.objects(BeneficiarySchema.name);
        const beneficiaries: BeneficiarySchema[] = JSON.parse(JSON.stringify(objects));
        const newBeneficiaries = beneficiaries.map(item => ToBeneficiaryModel(item));
        return Promise.resolve(newBeneficiaries);
    }

    async get(id: string){
        const object = this.realm.objects(BeneficiarySchema.name).find(item => item._id === id);
        const beneficiary: Beneficiary = JSON.parse(JSON.stringify(object));
        return Promise.resolve(beneficiary);
    }

    async add(beneficiary: Beneficiary) {
        this.realm.write(() => {
            const result = this.realm.create(BeneficiarySchema.name, ToBeneficiarySchema(beneficiary));
            return result != null;
        });
        return false;
    }

};