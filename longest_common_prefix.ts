function longestCommonPrefix(strs: string[]): string {
    let result = ""

    const shortestStr = findMinimumLength(strs)

    for (let i = 0; i < shortestStr.length; i++) {
        const isPrefixMatch = strs.every(str => str.startsWith(shortestStr.slice(0, i + 1)))

        if (isPrefixMatch) {
            result = shortestStr.slice(0, i + 1)
        } else {
            return result
        }
    }

    return result
};

function findMinimumLength(strs: string[]): string {
    let result = strs[0]

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < strs[i - 1].length) {
            result = strs[i]
        }
    }

    return result
}
