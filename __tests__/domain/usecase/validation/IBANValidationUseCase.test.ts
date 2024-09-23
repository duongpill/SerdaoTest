import { describe, expect } from '@jest/globals';
import { Dependencies } from '../../../../src/di/Dependencies';

describe('Test the Amount Validation', () => {

    let result: number | boolean;
    const input = '80';

    beforeEach(() => {
        result = Dependencies.instance().ibanValidationUseCase(input);
    });

    it('The IBAN is invalid', () => {
        expect(result).toEqual(false);
    });

});
