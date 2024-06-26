function lengthOfLastWord(s: string): number {
    const trimedStringArray = s.trim().split(' ')

    return trimedStringArray[trimedStringArray.length - 1].length
};
