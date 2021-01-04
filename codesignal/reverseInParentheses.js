function reverseInParentheses(inputString) {
    let po1 = 0, open=0, close=0, str = ''
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            if (po1 === 0) {
                open = i
            }
            po1++
        } else if (inputString[i] === ')') {
            po1--
            let result
            let newS
            if (po1 === 0) {
                close = i
                 newS= inputString.substring(open+1, close)
                 result= reverse1(newS)
            }
            if (result !== undefined) {
                str += result
                open = 0
                close = 0
            }
        } else {
            if (po1 === 0) str += inputString[i]
        }
    }
    return str
}
function reverse1(str) {
    let idx = str.indexOf('(')
    let lastIdx = str.lastIndexOf(')')
    if (idx === -1 && lastIdx === -1) {
        return str.split('').reverse().join('')
    } else {
        let newS = str.substring(idx+1, lastIdx)
        let front = str.substring(0, idx)
        let last = str.substring(lastIdx+1)
        let aaa = front + reverse1(newS) + last;
        return aaa.split('').reverse().join('')
    }
}

// much better solution;;;
function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");
        
        if (c === -1) {
            break;
        }
        
        let o = s.substring(0, c).lastIndexOf("(");
        
        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);
            
        s = start + middle + end;
    }
    
    return s;
}
