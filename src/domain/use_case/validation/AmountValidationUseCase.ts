export class AmountValidationUseCase {
    invoke(input: string, balance: number): AmountValidationType {
        if (this.isEmpty(input)) {
            return AmountValidationType.EMPTY;
        }
        if (this.isLargerThanBalance(input, balance)) {
            return AmountValidationType.LARGER_THAN_BALANCE;
        }
        return AmountValidationType.VALID;
    }

    private isEmpty(input: string){
        return input === '';
    }

    private isLargerThanBalance(input: string, balance: number){
        if (parseFloat(input) >= balance){
            return true;
        }
        return false;
    }
}

export enum AmountValidationType {
    EMPTY,
    LARGER_THAN_BALANCE,
    VALID
}
