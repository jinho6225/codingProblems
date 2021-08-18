function messageFromBinaryCode(code) {
    let answer = ""
    while (code.length > 0) {
        let letterASCII = code.substring(0, 8)
        let num = magic(letterASCII)
        answer += String.fromCharCode(num)
        code = code.substring(8)
    }
    return answer
}

function magic(binaryNum) {
    let num = 0, j = 0
    for (let i = binaryNum.length - 1; i >= 0; i--) {
        num += (Number(binaryNum[i]) * Math.pow(2, j))
        j++
    }
    return num
}
console.log(magic("01001000"))