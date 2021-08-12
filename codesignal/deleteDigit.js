function deleteDigit(n) {
    let candidateArr = []
    let stringInit = String(n)
    for (let i = 0; i < stringInit.length; i++) {
        candidateArr.push(Number(stringInit.substring(0, i) + stringInit.substring(i+1)))
    }
    return Math.max(...candidateArr)
}
