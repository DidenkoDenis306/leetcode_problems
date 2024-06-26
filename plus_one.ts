function plusOne(digits: number[]): number[] {
    return String(BigInt(digits.map(String).join('')) + BigInt(1)).split('').map(Number)
};
