import { describe, expect } from '@jest/globals';
import { AmountValidationType } from '../../../../src/domain/use_case/validation/AmountValidationUseCase';
import { Dependencies } from '../../../../src/di/Dependencies';

describe('Test the Amount Validation', () => {

    let checkTheAmount: AmountValidationType;
    const input = '80';
    const balance = 100;

    beforeEach(() => {
        checkTheAmount = Dependencies.instance().amountValidationUseCase(input, balance);
    });

    it('The amount is empty', () => {
        expect(checkTheAmount).toEqual(AmountValidationType.EMPTY);
    });

    it('The balance is not enough for the amount', () => {
        expect(checkTheAmount).toEqual(AmountValidationType.LARGER_THAN_BALANCE);
    });

    it('The amount is valid', () => {
        expect(checkTheAmount).toEqual(AmountValidationType.VALID);
    });

});
