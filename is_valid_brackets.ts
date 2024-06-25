function isValid(s: string): boolean {
    const brackets = {
        "}": "{",
        ")": "(",
        "]": "["
    }

    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in brackets)) {
            stack.push(s[i])
        } else {
            if (brackets[s[i]] === stack[stack.length - 1]) {
                stack.length--
            } else {
                return false
            } 
        }
    }

    return stack.length === 0
};
