function plusOne(digits: number[]): number[] {
    return String(Number(digits.map(String).join('')) + 1).split('').map(Number)
};
